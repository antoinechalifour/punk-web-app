import React from "react";

import { Beer } from "../../../../types";

import { BeerName, Tagline } from "./styles";

export interface HeaderProps {
  beer: Beer;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ beer }) => (
  <>
    <BeerName>{beer.name}</BeerName>
    <Tagline>{beer.tagline}</Tagline>
  </>
);
