import * as React from "react";

import { AppBar, AppBarContent } from "../../ui/AppBar";
import { BackLink } from "../../ui/BackLink";
import { Card, CardContent, CardTitle } from "../../ui/Card";
import {
  Container,
  Content,
  Description,
  GeneralInfo,
  Header,
  BrewerTips,
  IngredientCategory,
  IngredientList
} from "./styles";

export interface TemplateProps {
  header: JSX.Element;
  description: JSX.Element;
  image: JSX.Element;
  generalInformation: JSX.Element;
  brewersTips: JSX.Element;
  malts: JSX.Element;
  hops: JSX.Element;
  yeast: JSX.Element;
  foodPairing: JSX.Element;
}

export const Template: React.FunctionComponent<TemplateProps> = ({
  header,
  description,
  image,
  generalInformation,
  brewersTips,
  malts,
  hops,
  yeast,
  foodPairing
}) => (
  <Container>
    <AppBar>
      <AppBarContent>
        <BackLink to="/" aria-label="back to beers list" />
        <Header>{header}</Header>
      </AppBarContent>
    </AppBar>

    <Content>
      {image}

      <section>
        <Card>
          <CardContent>
            <CardTitle>About this beer</CardTitle>
            <Description>{description}</Description>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent>
            <CardTitle>General Information</CardTitle>
            <GeneralInfo>{generalInformation}</GeneralInfo>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent>
            <CardTitle>This beer is best served with</CardTitle>
            <div>{foodPairing}</div>
          </CardContent>
        </Card>
      </section>

      <BrewerTips>
        <div>Brewer's tip</div>
        {brewersTips}
      </BrewerTips>

      <section>
        <Card>
          <CardContent>
            <CardTitle>Ingredients</CardTitle>

            <IngredientCategory>Malts</IngredientCategory>
            <IngredientList>{malts}</IngredientList>

            <IngredientCategory>Hops</IngredientCategory>
            <IngredientList>{hops}</IngredientList>

            <IngredientCategory>Yeast</IngredientCategory>
            <IngredientList>{yeast}</IngredientList>
          </CardContent>
        </Card>
      </section>
    </Content>
  </Container>
);
