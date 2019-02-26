import React, { useRef } from "react";

import { useObservable } from "../hooks/useObservable";
import { useScrollReset } from "../hooks/useScrollReset";

import { createStore, BeerStore } from "./Store";
import { Template } from "./Template";
import { BrewerTips } from "./BrewerTips";
import { Description } from "./Description";
import { GeneralInformation } from "./GeneralInformation";
import { Header } from "./Header";
import { Image } from "./Image";
import { Hops } from "./Hops";
import { Malts } from "./Malts";
import { Yeast } from "./Yeast";
import { Beer } from "../types";

export interface BeerDetailsProps {
  id: string;
}

export const BeerDetails: React.FunctionComponent<BeerDetailsProps> = ({
  id
}) => {
  useScrollReset();

  const store = useRef<BeerStore | null>(null);
  const beer = useObservable<Beer | null>(getStore().state$, null);

  function getStore() {
    if (!store.current) {
      store.current = createStore(id);
    }

    return store.current;
  }

  return (
    <Template
      brewersTips={<BrewerTips beer={beer} />}
      description={<Description beer={beer} />}
      generalInformation={<GeneralInformation beer={beer} />}
      header={<Header beer={beer} />}
      image={<Image beer={beer} />}
      hops={<Hops beer={beer} />}
      malts={<Malts beer={beer} />}
      yeast={<Yeast beer={beer} />}
    />
  );
};
