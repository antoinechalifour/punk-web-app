import { AwilixContainer, asFunction } from "awilix";

import { createStore } from "./store";

export const registerDependencies = () => (container: AwilixContainer) => {
  container.register("beersService", asFunction(createStore).singleton());
};
