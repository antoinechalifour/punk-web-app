import { Observable, Subject, merge } from "rxjs";
import { switchMap, filter, map, debounceTime } from "rxjs/operators";
import { Beer } from "../types";
import { BeerApi } from "../api";

export interface SearchResults {
  query: string;
  beers: Beer[] | null;
}

interface SearchStoreOptions {
  api: BeerApi;
}

export interface SearchStore {
  results$: Observable<SearchResults>;
  search: (query: string) => void;
}

export function createSearchStore({ api }: SearchStoreOptions): SearchStore {
  const query$ = new Subject<string>();

  const abort$ = query$.pipe(
    filter(query => query.length < 2),
    map(query => ({
      query,
      beers: null
    }))
  );

  const search$ = query$.pipe(
    filter(query => query.length >= 2),
    debounceTime(300),
    switchMap(query =>
      api.searchBeers(query).then(beers => ({
        query,
        beers
      }))
    )
  );

  const results$ = merge(abort$, search$);

  return {
    results$,
    search: query => query$.next(query)
  };
}
