import { Observable } from "rxjs";

import { Beer } from "../../types";

export interface ViewModelState {
  query: string;
  beers: Beer[] | null;
  isSearching: boolean;
}

export interface ViewModel {
  results$: Observable<ViewModelState>;
  search: (query: string) => void;
}
