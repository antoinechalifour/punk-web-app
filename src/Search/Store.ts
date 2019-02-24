import { Observable, Subject, merge } from "rxjs";
import { switchMap, filter, map, debounceTime } from "rxjs/operators";

export interface Beer {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
}

export interface SearchResults {
  query: string;
  beers: Beer[] | null;
}

export interface SearchStore {
  results$: Observable<SearchResults>;
  search: (query: string) => void;
}

function searchBeers(query: string) {
  return fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`).then(
    response => response.json() as Promise<Beer[]>
  );
}

export function createSearchStore(): SearchStore {
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
      searchBeers(query).then(beers => ({
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
