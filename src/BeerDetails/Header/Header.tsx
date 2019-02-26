import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";

export interface HeaderProps {
  beer: Beer | null;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ beer }) =>
  beer ? (
    <>
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
    </>
  ) : (
    <div>
      <TextBlock rows={2} color="rgba(255, 255, 255, .2)" />
    </div>
  );
