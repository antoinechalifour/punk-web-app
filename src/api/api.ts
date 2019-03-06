import { mapBeer } from "./mapBeer";
import { Beer } from "../types";
import { ApiBeer } from "./types";

export interface BeerApi {
  fetchBeer: (id: string) => Promise<Beer>;
  fetchBeers: (page: number) => Promise<Beer[]>;
  searchBeers: (query: string) => Promise<Beer[]>;
}

export interface BeerApiOptions {
  apiBase: string;
}

class NetworkError extends Error {
  public response?: Response;
}

function throwIfNotOk(response: Response) {
  if (!response.ok) {
    const error = new NetworkError("Request failed");
    error.response = response;

    throw error;
  }

  return response;
}

export function createApi({ apiBase }: BeerApiOptions): BeerApi {
  return {
    fetchBeer(id) {
      return fetch(`${apiBase}/beers/${id}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[] & { length: 1 }>)
        .then(beers => beers[0])
        .then(mapBeer);
    },
    fetchBeers(page) {
      return fetch(`${apiBase}/beers?page=${page}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[]>)
        .then(beers => beers.map(mapBeer));
    },
    searchBeers(query) {
      return fetch(`${apiBase}/beers?beer_name=${query}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[]>)
        .then(beers => beers.map(mapBeer));
    }
  };
}
