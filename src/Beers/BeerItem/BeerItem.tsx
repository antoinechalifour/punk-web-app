import React from "react";

import { Beer } from "../Store";
import { Card, CardContent } from "../../ui/Card";
import {
  Wrapper,
  InnerLayout,
  Image,
  Details,
  Name,
  TagLine,
  Link
} from "./styles";

export interface BeerItemProps {
  beer: Beer;
}

export const BeerItem: React.FunctionComponent<BeerItemProps> = ({ beer }) => (
  <Wrapper>
    <Card>
      <CardContent>
        <InnerLayout>
          <Image src={beer.image_url} alt={`Bottle of ${beer.image_url}`} />
          <Details>
            <Name>{beer.name}</Name>
            <TagLine>{beer.tagline}</TagLine>
            <Link to={`/beers/${beer.id}`}>Read more</Link>
          </Details>
        </InnerLayout>
      </CardContent>
    </Card>
  </Wrapper>
);
