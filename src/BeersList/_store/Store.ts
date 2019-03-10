import { BehaviorSubject, ReplaySubject, of } from "rxjs";
import { scan, throttleTime, switchMap, map, merge } from "rxjs/operators";

import { Beer } from "../../types";
import { BeerApi } from "../../api";
import { BeersStore, BeerStoreState } from "./types";
import {
  ActionLoad,
  ActionTypes,
  ActionAddBeer,
  ActionMount,
  Action
} from "./actions";
import { beersReducer, initialState } from "./reducer";

export interface Options {
  api: BeerApi;
}

export function createStore({ api }: Options): BeersStore {
  const paginationSubject$ = new BehaviorSubject(undefined);
  const pagination$ = paginationSubject$.pipe(
    throttleTime(100),
    scan<undefined, number>(acc => acc + 1, 0)
  );

  const loading$ = pagination$.pipe(
    map<number, ActionLoad>(() => ({ type: ActionTypes.LOADING }))
  );

  const newBeers$ = pagination$.pipe(
    switchMap(api.fetchBeers),
    map<Beer[], ActionAddBeer>(beers => ({
      type: ActionTypes.ADD_BEERS,
      beers
    }))
  );

  const beers$ = of<ActionMount>({ type: ActionTypes.MOUNTING }).pipe(
    merge(loading$, newBeers$),
    scan<Action, BeerStoreState>(beersReducer, initialState)
  );

  const state$ = new ReplaySubject<BeerStoreState>(1);

  beers$.subscribe(state$);

  return {
    state$,
    fetchMore() {
      paginationSubject$.next(undefined);
    }
  };
}
