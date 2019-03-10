import { from, BehaviorSubject, of } from "rxjs";

import { BeerApi } from "../../api";
import { BeerRepository } from "./types";
import { Beer } from "../../types";
import {
  map,
  scan,
  switchMap,
  throttleTime,
  shareReplay
} from "rxjs/operators";

export interface Options {
  api: BeerApi;
}

export function createBeerRepository({ api }: Options): BeerRepository {
  const paginationSubject$ = new BehaviorSubject(undefined);
  const paginatedBeers$ = paginationSubject$.pipe(
    throttleTime(100),
    map(() => 1),
    scan((acc, increment) => acc + increment, 0),
    switchMap(api.fetchBeers),
    scan((beers, newBeers) => [...beers, ...newBeers], [] as Beer[]),
    shareReplay(1)
  );

  return {
    getBeer: id =>
      paginatedBeers$.pipe(
        switchMap(beers => {
          const beer = beers.find(x => x.id.toString() === id);

          if (beer) {
            return of(beer);
          }

          return from(api.fetchBeer(id));
        })
      ),
    getBeers: () => paginatedBeers$,
    loadMoreBeers: async () => paginationSubject$.next(undefined),
    searchBeers: query => from(api.searchBeers(query))
  };
}
