import React from "react";

import { DiScope } from "../../di/DiScope";
import { registerDependencies } from "./di";
import { BeerDetails } from "./BeerDetails";

export interface BeerDetailsModuleProps {
  id: string;
}

const BeerDetailsModule: React.FunctionComponent<BeerDetailsModuleProps> = ({
  id
}) => (
  <DiScope registerDependencies={registerDependencies(id)}>
    <BeerDetails />
  </DiScope>
);

export default BeerDetailsModule;
