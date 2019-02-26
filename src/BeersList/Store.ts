import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { scan, throttleTime, switchMap, tap } from "rxjs/operators";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

export interface BeersStore {
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

export function createStore(): BeersStore {
  const pagination$ = new BehaviorSubject(undefined);
  const beers$ = pagination$.pipe(
    throttleTime(2000),
    scan<undefined, number>(acc => acc + 1, 0),
    tap(page => console.log("Fetching page: ", page)),
    switchMap(fetchBeers),
    scan(beersReducer, [] as Beer[])
  );

  const state$ = new ReplaySubject<Beer[]>(1);

  beers$.subscribe(state$);

  return {
    state$,
    fetchMore() {
      pagination$.next(undefined);
    }
  };
}
