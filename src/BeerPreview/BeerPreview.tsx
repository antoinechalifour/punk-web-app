import React from "react";

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

export interface BeerPreviewProps {
  imageUrl: string;
  name: string;
  tagline: string;
  id: number;
}

export const BeerPreview: React.FunctionComponent<BeerPreviewProps> = ({
  id,
  imageUrl,
  name,
  tagline
}) => (
  <Wrapper>
    <Card>
      <CardContent>
        <InnerLayout>
          <Image src={imageUrl} alt={`Bottle of ${imageUrl}`} />
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
