import { AwilixContainer, asFunction } from "awilix";

import { createViewModel } from "./ViewModel";

export const registerDependencies = () => (container: AwilixContainer) => {
  container.register("viewModel", asFunction(createViewModel).scoped());
};
