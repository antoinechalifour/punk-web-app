import {
  createContainer as createAwilixContainer,
  asFunction,
  asValue
} from "awilix";

import { createApi } from "../api";
import { createBeerRepository } from "../repository/beers";

export function createContainer() {
  const container = createAwilixContainer();

  container.register("apiBase", asValue("https://api.punkapi.com/v2"));
  container.register("api", asFunction(createApi));
  container.register(
    "beerRepository",
    asFunction(createBeerRepository).singleton()
  );

  return container;
}
