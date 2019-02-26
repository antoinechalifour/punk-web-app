import { mapBeer } from "./mapBeer";
import { Beer } from "../types";
import { ApiBeer } from "./types";

export interface BeerApi {
  fetchBeer: (id: string) => Promise<Beer>;
  fetchBeers: (page: number) => Promise<Beer[]>;
  searchBeers: (query: string) => Promise<Beer[]>;
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

export function createApi(): BeerApi {
  return {
    fetchBeer(id) {
      return fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[] & { length: 1 }>)
        .then(beers => beers[0])
        .then(mapBeer);
    },
    fetchBeers(page) {
      return fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[]>)
        .then(beers => beers.map(mapBeer));
    },
    searchBeers(query) {
      return fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
        .then(throwIfNotOk)
        .then(response => response.json() as Promise<ApiBeer[]>)
        .then(beers => beers.map(mapBeer));
    }
  };
}
