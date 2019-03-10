import { merge, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Beer } from "../types";
import { ViewModel, ViewModelState } from "./types";

import { BeerRepository } from "../repository/beers/types";

export interface Options {
  beerRepository: BeerRepository;
}

const defaultBeers: Beer[] = [];

export const initialState: ViewModelState = {
  state: "mounting",
  beers: defaultBeers
};

export function createViewModel({ beerRepository }: Options): ViewModel {
  const loadingSubject$ = new Subject();
  const loading$ = loadingSubject$.pipe(
    map(
      () =>
        ({
          state: "loading"
        } as ViewModelState)
    )
  );
  const beers$ = beerRepository.getBeers().pipe(
    map<Beer[], ViewModelState>(beers => ({
      state: "ready",
      beers
    }))
  );

  const state$ = merge(loading$, beers$);

  return {
    state$,
    fetchMore: () => beerRepository.loadMoreBeers()
  };
}
