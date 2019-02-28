import React from "react";
import { FiSearch } from "react-icons/fi";

import { Wrapper, SearchButton } from "./styles";

export interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => (
  <>
    <Wrapper>
      <h1>Punk Web App</h1>
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </Wrapper>
  </>
);
