import React from "react";

import { Beer } from "../../../types";

export interface YeastProps {
  beer: Beer;
}

export const Yeast: React.FunctionComponent<YeastProps> = ({ beer }) => (
  <li>{beer.yeast}</li>
);
