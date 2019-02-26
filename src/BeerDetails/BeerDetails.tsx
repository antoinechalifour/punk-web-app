import React, { useRef, useEffect, useState } from "react";

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
  const store = useRef<BeerStore | null>(null);
  const [beer, setBeer] = useState<Beer | null>(null);

  function getStore() {
    if (!store.current) {
      store.current = createStore(id);
    }

    return store.current;
  }

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const subscription = getStore().state$.subscribe(setBeer);

    return () => subscription.unsubscribe();
  }, [id]);

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
