import { Observable, from } from "rxjs";

import { Beer } from "../types";
import { createApi } from "../api";

export interface BeerStore {
  state$: Observable<Beer>;
}

export function createStore(beerId: string): BeerStore {
  const api = createApi();
  const state$ = from(api.fetchBeer(beerId));

  return {
    state$
  };
}
