import React from "react";

import { DiScope } from "../../Di/DiScope";
import { registerDependencies } from "./di";
import { Beers } from "./Beers";

export interface BeersListModuleProps {}

const BeersListModule: React.FunctionComponent<BeersListModuleProps> = () => (
  <DiScope registerDependencies={registerDependencies()}>
    <Beers />
  </DiScope>
);

export default BeersListModule;
