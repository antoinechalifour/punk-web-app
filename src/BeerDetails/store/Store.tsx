import { from, of } from "rxjs";

import { BeerApi } from "../../api";
import {
  BeerStore,
  BeerStoreState,
  ReadyState,
  ErroredState,
  MountingState
} from "./types";
import { catchError, map, merge } from "rxjs/operators";

export const initialState: MountingState = {
  state: "mounting"
};

export interface Options {
  beerId: string;
  api: BeerApi;
}

export function createStore({ beerId, api }: Options): BeerStore {
  const loading$ = of<BeerStoreState>({ state: "loading" });
  const fetchBeer$ = from(api.fetchBeer(beerId)).pipe(
    map(
      beer =>
        ({
          state: "ready",
          beer
        } as ReadyState)
    ),
    catchError(err =>
      of({
        state: "errored",
        error: err
      } as ErroredState)
    )
  );

  const state$ = of<BeerStoreState>(initialState).pipe(
    merge(loading$),
    merge(fetchBeer$)
  );

  return {
    state$
  };
}
