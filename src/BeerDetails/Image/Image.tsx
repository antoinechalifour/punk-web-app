import React from "react";
import { RoundShape } from "react-placeholder/lib/placeholders";

import { Image as BeerAvatar } from "../styles";
import { Beer } from "../Store";

export interface ImageProps {
  beer: Beer | null;
}

export const Image: React.FunctionComponent<ImageProps> = ({ beer }) =>
  beer ? (
    <BeerAvatar src={beer.imageUrl} />
  ) : (
    <RoundShape
      color="#f5f5f5"
      style={{
        height: 150,
        width: 150,
        margin: "auto",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2)"
      }}
    />
  );
