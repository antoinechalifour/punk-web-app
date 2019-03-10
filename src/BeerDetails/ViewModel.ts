import { from, of } from "rxjs";

import { BeerApi } from "../api";
import {
  ViewModel,
  ViewModelState,
  VMReadyState,
  VMErroredState,
  VMMountingState
} from "./types";
import { catchError, map, merge } from "rxjs/operators";

export const initialState: VMMountingState = {
  state: "mounting"
};

export interface Options {
  beerId: string;
  api: BeerApi;
}

export function createViewModel({ beerId, api }: Options): ViewModel {
  const loading$ = of<ViewModelState>({ state: "loading" });
  const fetchBeer$ = from(api.fetchBeer(beerId)).pipe(
    map(
      beer =>
        ({
          state: "ready",
          beer
        } as VMReadyState)
    ),
    catchError(err =>
      of({
        state: "errored",
        error: err
      } as VMErroredState)
    )
  );

  const state$ = of<ViewModelState>(initialState).pipe(
    merge(loading$),
    merge(fetchBeer$)
  );

  return {
    state$
  };
}
