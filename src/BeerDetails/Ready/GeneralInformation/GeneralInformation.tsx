import React from "react";

import { Beer } from "../../../types";
import { InfoGroup } from "./styles";

export interface GeneralInformationProps {
  beer: Beer;
}

export const GeneralInformation: React.FunctionComponent<
  GeneralInformationProps
> = ({ beer }) => (
  <>
    <InfoGroup>
      <span>{beer.alcoholByVolume}%</span>
      <span>Alcohol by volume</span>
    </InfoGroup>

    <InfoGroup>
      <span>{beer.firstBrewed}</span>
      <span>First brewed</span>
    </InfoGroup>
  </>
);
