import { Beer } from "../types";
import { Observable } from "rxjs";

export interface ViewModelState {
  query: string;
  beers: Beer[] | null;
  isSearching: boolean;
}

export interface ViewModel {
  results$: Observable<ViewModelState>;
  search: (query: string) => void;
}
