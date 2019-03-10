import { BehaviorSubject, merge } from "rxjs";
import { scan, throttleTime, switchMap, map } from "rxjs/operators";

import { Beer } from "../types";
import { ViewModel, ViewModelState } from "./types";

import { BeerApi } from "../api";

export interface Options {
  api: BeerApi;
}

const defaultBeers: Beer[] = [];

export const initialState: ViewModelState = {
  state: "mounting",
  beers: defaultBeers
};

export function createViewModel({ api }: Options): ViewModel {
  const paginationSubject$ = new BehaviorSubject(undefined);
  const pagination$ = paginationSubject$.pipe(
    throttleTime(100),
    scan<undefined, number>(acc => acc + 1, 0)
  );

  const loading$ = pagination$.pipe(
    map<number, Partial<ViewModelState>>(() => ({
      state: "loading"
    }))
  );

  const fetchBeers$ = pagination$.pipe(
    switchMap(api.fetchBeers),
    map<Beer[], ViewModelState>(beers => ({
      state: "ready",
      beers
    }))
  );

  const state$ = merge(loading$, fetchBeers$).pipe(
    scan<Partial<ViewModelState>, ViewModelState>(
      (state, updates) => ({
        ...state,
        ...updates,
        beers: [...state.beers, ...(updates.beers ? updates.beers : [])]
      }),
      initialState
    )
  );

  return {
    state$,
    fetchMore() {
      paginationSubject$.next(undefined);
    }
  };
}
