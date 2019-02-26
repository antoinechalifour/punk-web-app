import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { scan, throttleTime, switchMap, tap } from "rxjs/operators";
import { Beer } from "../types";
import { css } from "styled-components";
import { createApi } from "../api";

export interface BeersStore {
  state$: Observable<BeerStoreState>;
  fetchMore: () => void;
}

export type BeerStoreState = Beer[];

function beersReducer(state: Beer[], newBeers: Beer[]) {
  return [...state, ...newBeers];
}

export function createStore(): BeersStore {
  const api = createApi();
  const pagination$ = new BehaviorSubject(undefined);
  const beers$ = pagination$.pipe(
    throttleTime(2000),
    scan<undefined, number>(acc => acc + 1, 0),
    tap(page => console.log("Fetching page: ", page)),
    switchMap(api.fetchBeers),
    scan(beersReducer, [] as Beer[])
  );

  const state$ = new ReplaySubject<Beer[]>(1);

  beers$.subscribe(state$);

  return {
    state$,
    fetchMore() {
      pagination$.next(undefined);
    }
  };
}
