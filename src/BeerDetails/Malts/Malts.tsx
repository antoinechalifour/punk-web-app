import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";

export interface MaltsProps {
  beer: Beer | null;
}

export const Malts: React.FunctionComponent<MaltsProps> = ({ beer }) =>
  beer ? (
    <>
      {beer.malts.map(malt => (
        <li key={`${malt.amount} of ${malt.name}`}>
          {malt.amount} of {malt.name}
        </li>
      ))}
    </>
  ) : (
    <TextBlock rows={3} color="rgba(0, 0, 0, .2)" />
  );
