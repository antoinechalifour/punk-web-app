import React from "react";

import { Beer } from "../../types";
import { BeerCard } from "../../BeerCard";
import { ResultList } from "./styles";

export interface ResultsProps {
  beers: Beer[];
}

export const Results: React.FunctionComponent<ResultsProps> = ({ beers }) => (
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
);
