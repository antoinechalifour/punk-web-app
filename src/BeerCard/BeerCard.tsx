import React from "react";

import placeholder from "./placeholder.png";
import { Card, CardContent } from "../ui/Card";
import {
  Wrapper,
  InnerLayout,
  Image,
  Details,
  Name,
  TagLine,
  Link
} from "./styles";

export interface BeerCardProps {
  imageUrl: string;
  name: string;
  tagline: string;
  id: number;
}

export const BeerCard: React.FunctionComponent<BeerCardProps> = ({
  id,
  imageUrl,
  name,
  tagline
}) => (
  <Wrapper>
    <Card>
      <CardContent>
        <InnerLayout>
          <Image
            src={imageUrl}
            alt={`Bottle of ${name}`}
            placeholderSrc={placeholder}
          />
          <Details>
            <Name>{name}</Name>
            <TagLine>{tagline}</TagLine>
            <Link to={`/beers/${id}`}>Read more</Link>
          </Details>
        </InnerLayout>
      </CardContent>
    </Card>
  </Wrapper>
);
