import { Observable } from "rxjs";

import { Beer } from "../../types";

export interface BeerRepository {
  getBeers: () => Observable<Beer[]>;
  getBeer: (id: string) => Observable<Beer>;
  loadMoreBeers: () => void;
  searchBeers: (query: string) => Observable<Beer[]>;
}
