import React from "react";

import { Beer } from "../../../types";

import { Template } from "../Template";
import { BrewerTips } from "./BrewerTips";
import { Description } from "./Description";
import { GeneralInformation } from "./GeneralInformation";
import { Header } from "./Header";
import { Hops } from "./Hops";
import { Image } from "./Image";
import { Malts } from "./Malts";
import { Yeast } from "./Yeast";
import { FoodPairing } from "./FoodPairing";

export interface ReadyProps {
  beer: Beer;
}

export const Ready: React.FunctionComponent<ReadyProps> = ({ beer }) => (
  <Template
    brewersTips={<BrewerTips beer={beer} />}
    description={<Description beer={beer} />}
    generalInformation={<GeneralInformation beer={beer} />}
    header={<Header beer={beer} />}
    hops={<Hops beer={beer} />}
    image={<Image beer={beer} />}
    malts={<Malts beer={beer} />}
    yeast={<Yeast beer={beer} />}
    foodPairing={<FoodPairing beer={beer} />}
  />
);
