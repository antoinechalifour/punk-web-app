import {
  createContainer as createAwilixContainer,
  asFunction,
  asValue
} from "awilix";
import { createApi } from "../api";

export function createContainer() {
  const container = createAwilixContainer();

  container.register("apiBase", asValue("https://api.punkapi.com/v2"));
  container.register("api", asFunction(createApi));

  return container;
}
