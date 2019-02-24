import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../Store";

export interface DescriptionProps {
  beer: Beer | null;
}

export const Description: React.FunctionComponent<DescriptionProps> = ({
  beer
}) =>
  beer ? (
    <>{beer.description}</>
  ) : (
    <TextBlock rows={4} color="rgba(0, 0, 0, .2)" />
  );
