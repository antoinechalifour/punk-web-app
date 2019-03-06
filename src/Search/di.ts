import { AwilixContainer, asFunction } from "awilix";

import { createSearchStore } from "./Store";

export const registerDependencies = () => (container: AwilixContainer) => {
  container.register(
    "searchService",
    asFunction(createSearchStore).singleton()
  );
};
