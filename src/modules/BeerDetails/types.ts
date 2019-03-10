import { Observable } from "rxjs";

import { Beer } from "../../types";

export interface VMMountingState {
  state: "mounting";
}

export interface VMLoadingState {
  state: "loading";
}

export interface VMReadyState {
  state: "ready";
  beer: Beer;
}

export interface VMErroredState {
  state: "errored";
  error: Error;
}

export type ViewModelState =
  | VMMountingState
  | VMLoadingState
  | VMReadyState
  | VMErroredState;

export interface ViewModel {
  state$: Observable<ViewModelState>;
}
