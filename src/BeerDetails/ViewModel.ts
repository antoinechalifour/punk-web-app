import { of } from "rxjs";

import {
  ViewModel,
  ViewModelState,
  VMReadyState,
  VMErroredState,
  VMMountingState
} from "./types";
import { catchError, map, merge } from "rxjs/operators";
import { BeerRepository } from "../repository/beers/types";

export const initialState: VMMountingState = {
  state: "mounting"
};

export interface Options {
  beerId: string;
  beerRepository: BeerRepository;
}

export function createViewModel({
  beerId,
  beerRepository
}: Options): ViewModel {
  const loading$ = of({ state: "loading" } as ViewModelState);
  const fetchBeer$ = beerRepository.getBeer(beerId).pipe(
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

  const state$ = of(initialState).pipe(
    merge(loading$),
    merge(fetchBeer$)
  );

  return {
    state$
  };
}
