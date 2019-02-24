import React from "react";

import { Wrapper, SearchButton, SearchIcon } from "./styles";

export interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => (
  <>
    <Wrapper>
      <h1>Punk Web App</h1>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  </>
);
