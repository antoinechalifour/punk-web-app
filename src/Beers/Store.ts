import { Observable, BehaviorSubject } from "rxjs";
import { scan, flatMap, map, tap, throttleTime } from "rxjs/operators";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

export interface BeerStore {
  state$: Observable<BeerStoreState>;
  fetchMore: () => void;
}

export type BeerStoreState = Beer[];

function fetchBeers(page: number) {
  return fetch(`https://api.punkapi.com/v2/beers?page=${page}`).then(
    response => response.json() as Promise<Beer[]>
  );
}

function beersReducer(state: Beer[], newBeers: Beer[]) {
  return [...state, ...newBeers];
}

export function createStore(): BeerStore {
  const pagination$ = new BehaviorSubject<undefined>(undefined);
  const state$ = pagination$.pipe(
    throttleTime(2000),
    scan<undefined, number>(acc => acc + 1, 0),
    flatMap(fetchBeers),
    scan(beersReducer, [] as Beer[])
  );

  return {
    state$,
    fetchMore() {
      pagination$.next(undefined);
    }
  };
}
