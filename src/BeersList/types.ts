import { Observable } from "rxjs";

import { Beer } from "../types";

export interface ViewModel {
  state$: Observable<ViewModelState>;
  fetchMore: () => void;
}

export interface ViewModelState {
  state: "mounting" | "loading" | "ready";
  beers: Beer[];
}
