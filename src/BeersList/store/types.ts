import { Observable } from "rxjs";

import { Beer } from "../../types";

export interface BeersStore {
  state$: Observable<BeerStoreState>;
  fetchMore: () => void;
}

export interface BeerStoreState {
  state: "mounting" | "loading" | "ready";
  beers: Beer[];
}
