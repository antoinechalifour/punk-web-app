import React from "react";

import { Beer } from "../../../types";

export interface BrewerTipsProps {
  beer: Beer;
}

export const BrewerTips: React.FunctionComponent<BrewerTipsProps> = ({
  beer
}) => <div>{beer.brewerTips}</div>;
