import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../../types";

export interface HeaderProps {
  beer: Beer;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ beer }) => (
  <>
    <h1>{beer.name}</h1>
    <p>{beer.tagline}</p>
  </>
);
