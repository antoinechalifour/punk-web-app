import React from "react";

import { DiScope } from "../../Di/DiScope";
import { registerDependencies } from "./di";
import { SearchBeers } from "./Search";

export interface SearchBeersModuleProps {}

const SearchBeersModule: React.FunctionComponent<
  SearchBeersModuleProps
> = () => (
  <DiScope registerDependencies={registerDependencies()}>
    <SearchBeers />
  </DiScope>
);

export default SearchBeersModule;
