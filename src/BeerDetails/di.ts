import { AwilixContainer, asFunction, asValue } from "awilix";
import { createStore } from "./store";

export const registerDependencies = (currentBeerId: string) => (
  container: AwilixContainer
) => {
  container.register("beerId", asValue(currentBeerId));
  container.register("beerService", asFunction(createStore).singleton());
};
