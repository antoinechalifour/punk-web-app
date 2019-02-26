import React from "react";

import { Beer } from "../../../types";

export interface MaltsProps {
  beer: Beer;
}

export const Malts: React.FunctionComponent<MaltsProps> = ({ beer }) => (
  <>
    {beer.malts.map(malt => (
      <li key={`${malt.amount} of ${malt.name}`}>
        {malt.amount} of {malt.name}
      </li>
    ))}
  </>
);
