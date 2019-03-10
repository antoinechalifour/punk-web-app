import React from "react";

import { Beer } from "../../../types";
import { BeerCard } from "../../../ui/BeerCard";
import { Title } from "../styles";

import { ResultList } from "./styles";

export interface ResultsProps {
  beers: Beer[];
  query: string;
}

export const Results: React.FunctionComponent<ResultsProps> = ({
  beers,
  query
}) => (
  <>
    <Title>Results for "{query}"</Title>
    <ResultList>
      {beers.map(beer => (
        <li key={beer.id}>
          <BeerCard
            id={beer.id}
            imageUrl={beer.imageUrl}
            name={beer.name}
            tagline={beer.tagline}
          />
        </li>
      ))}
    </ResultList>
  </>
);
