import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";

import { Beer } from "../../types";
import { InfoGroup } from "../styles";

export interface GeneralInformationProps {
  beer: Beer | null;
}

export const GeneralInformation: React.FunctionComponent<
  GeneralInformationProps
> = ({ beer }) =>
  beer ? (
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
  ) : (
    <>
      <TextBlock rows={2} color="rgba(0, 0, 0, .2)" />
    </>
  );
