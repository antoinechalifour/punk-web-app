import React from "react";

import { Beer } from "../../../types";

export interface DescriptionProps {
  beer: Beer;
}

export const Description: React.FunctionComponent<DescriptionProps> = ({
  beer
}) => <>{beer.description}</>;
