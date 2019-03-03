import React from "react";

import { Beer } from "../../../types";
import { Image as BeerAvatar } from "./styles";

export interface ImageProps {
  beer: Beer;
}

export const Image: React.FunctionComponent<ImageProps> = ({ beer }) => (
  <BeerAvatar src={beer.imageUrl} />
);
