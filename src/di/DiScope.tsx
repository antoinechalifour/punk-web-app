import React, { useContext } from "react";
import { AwilixContainer } from "awilix";

import { context } from "./context";

export interface DiScopeProps {
  registerDependencies: (container: AwilixContainer) => void;
}

// This implementation might be broken.
// Another implementation that works involes UNSAFE_componentWillReceiveProps
export const DiScope: React.FunctionComponent<DiScopeProps> = ({
  registerDependencies,
  children
}) => {
  const getParentContainer = useContext(context);
  const parentContainer = getParentContainer();
  const scopedContainer = parentContainer.createScope();

  registerDependencies(scopedContainer);

  return (
    <context.Provider value={() => scopedContainer}>
      {children}
    </context.Provider>
  );
};
