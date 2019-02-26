import React from "react";

import { Beer } from "../../../types";

export interface HopsProps {
  beer: Beer;
}

export const Hops: React.FunctionComponent<HopsProps> = ({ beer }) => (
  <>
    {beer.hops.map(hop => (
      <li key={`${hop.amount} of ${hop.name}`}>
        {hop.amount} of {hop.name}
      </li>
    ))}
  </>
);
