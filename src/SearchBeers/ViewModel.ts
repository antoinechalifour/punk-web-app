import { Subject, merge } from "rxjs";
import { switchMap, filter, map, debounceTime } from "rxjs/operators";

import { BeerApi } from "../api";
import { ViewModel } from "./types";

interface Options {
  api: BeerApi;
}

export function createViewModel({ api }: Options): ViewModel {
  const query$ = new Subject<string>();

  const abort$ = query$.pipe(
    filter(query => query.length < 2),
    map(query => ({
      query,
      beers: null,
      isSearching: false
    }))
  );

  const searching$ = query$.pipe(
    filter(query => query.length >= 2),
    map(query => ({
      query,
      beers: null,
      isSearching: true
    }))
  );

  const search$ = query$.pipe(
    filter(query => query.length >= 2),
    debounceTime(300),
    switchMap(query =>
      api.searchBeers(query).then(beers => ({
        query,
        beers,
        isSearching: false
      }))
    )
  );

  const results$ = merge(abort$, searching$, search$);

  return {
    results$,
    search: query => query$.next(query)
  };
}
