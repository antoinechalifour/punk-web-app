import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";

export interface YeastProps {
  beer: Beer | null;
}

export const Yeast: React.FunctionComponent<YeastProps> = ({ beer }) =>
  beer ? (
    <li>{beer.yeast}</li>
  ) : (
    <TextBlock rows={1} color="rgba(0, 0, 0, .2)" />
  );
