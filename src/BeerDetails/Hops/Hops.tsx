import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";

export interface HopsProps {
  beer: Beer | null;
}

export const Hops: React.FunctionComponent<HopsProps> = ({ beer }) =>
  beer ? (
    <>
      {beer.hops.map(hop => (
        <li key={`${hop.amount} of ${hop.name}`}>
          {hop.amount} of {hop.name}
        </li>
      ))}
    </>
  ) : (
    <TextBlock rows={5} color="rgba(0, 0, 0, .2)" />
  );
