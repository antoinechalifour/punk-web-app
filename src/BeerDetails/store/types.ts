import { Observable } from "rxjs";

import { Beer } from "../../types";

export interface MountingState {
  state: "mounting";
}

export interface LoadingState {
  state: "loading";
}

export interface ReadyState {
  state: "ready";
  beer: Beer;
}

export interface ErroredState {
  state: "errored";
  error: Error;
}

export type BeerStoreState =
  | MountingState
  | LoadingState
  | ReadyState
  | ErroredState;

export interface BeerStore {
  state$: Observable<BeerStoreState>;
}
