import * as React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardTitle,
  Description,
  GeneralInfo,
  BrewerTips,
  IngredientCategory,
  IngredientList
} from "../styles";

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
    <Header>{header}</Header>

    <Content>
      {image}

      <section>
        <Card>
          <CardTitle>About this beer</CardTitle>
          <Description>{description}</Description>
        </Card>
      </section>

      <section>
        <Card>
          <CardTitle>General Information</CardTitle>

          <GeneralInfo>{generalInformation}</GeneralInfo>
        </Card>
      </section>

      <section>
        <Card>
          <CardTitle>This beer is best served with</CardTitle>

          <div>{foodPairing}</div>
        </Card>
      </section>

      <BrewerTips>
        <div>Brewer's tip</div>
        {brewersTips}
      </BrewerTips>

      <section>
        <Card>
          <CardTitle>Ingredients</CardTitle>

          <IngredientCategory>Malts</IngredientCategory>
          <IngredientList>{malts}</IngredientList>

          <IngredientCategory>Hops</IngredientCategory>
          <IngredientList>{hops}</IngredientList>

          <IngredientCategory>Yeast</IngredientCategory>
          <IngredientList>{yeast}</IngredientList>
        </Card>
      </section>
    </Content>
  </Container>
);
