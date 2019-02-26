import React, { useEffect, useState } from "react";

import { BeersStore } from "./Store";
import { BeerPreview } from "../BeerPreview";
import { BeersList } from "./styles";
import { Header } from "./Header";
import { Beer } from "../types";
import { InfiniteList } from "../ui/InfiniteList";
import { useObservable } from "../hooks/useObservable";

export interface BeersProps {
  store: BeersStore;
}

export const Beers: React.FunctionComponent<BeersProps> = ({ store }) => {
  const beers = useObservable<Beer[] | null>(store.state$, null);

  if (!beers) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Header />
      <InfiniteList
        renderLoader={() => <>Loading...</>}
        requestMoreItems={store.fetchMore}
      >
        <BeersList>
          {beers.map(beer => (
            <li key={beer.id}>
              <BeerPreview
                id={beer.id}
                imageUrl={beer.imageUrl}
                name={beer.name}
                tagline={beer.tagline}
              />
            </li>
          ))}
        </BeersList>
      </InfiniteList>
    </main>
  );
};
