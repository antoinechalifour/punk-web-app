import { AwilixContainer, asFunction, asValue } from "awilix";
import { createViewModel } from "./ViewModel";

export const registerDependencies = (currentBeerId: string) => (
  container: AwilixContainer
) => {
  container.register("beerId", asValue(currentBeerId));
  container.register("viewModel", asFunction(createViewModel).scoped());
};
