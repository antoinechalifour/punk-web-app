import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";

export interface BrewerTipsProps {
  beer: Beer | null;
}

export const BrewerTips: React.FunctionComponent<BrewerTipsProps> = ({
  beer
}) =>
  beer ? (
    <>
      <div>{beer.brewerTips}</div>
    </>
  ) : (
    <TextBlock rows={3} color="rgba(255, 255, 255, .2)" />
  );
