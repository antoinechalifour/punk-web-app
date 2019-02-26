import { from, of } from "rxjs";

import { createApi } from "../../api";
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

export function createStore(beerId: string): BeerStore {
  const api = createApi();

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
