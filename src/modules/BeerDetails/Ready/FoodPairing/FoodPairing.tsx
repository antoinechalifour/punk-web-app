import React from "react";

import { Beer } from "../../../../types";

import { Pairings } from "./styles";

export interface FoodPairingProps {
  beer: Beer;
}

export const FoodPairing: React.FunctionComponent<FoodPairingProps> = ({
  beer
}) => (
  <Pairings>
    {beer.foodPairing.map(food => (
      <li key={food}>{food}</li>
    ))}
  </Pairings>
);
