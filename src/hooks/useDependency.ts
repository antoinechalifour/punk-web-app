import { AwilixContainer } from "awilix";
import { useContext, useMemo } from "react";

import { context } from "../Di";

export type GetDependencies<T> = (container: AwilixContainer) => T;

export const useDependency = <T>(getDependencies: GetDependencies<T>) => {
  const getContainer = useContext(context);
  const container = getContainer();
  const dependencies = useMemo(() => getDependencies(container), [container]);

  return dependencies;
};
