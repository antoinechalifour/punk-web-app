import React from "react";

import { BeersStore, BeerStoreState, initialState } from "./store/index";
import { BeerPreview } from "../BeerPreview";
import { BeersList } from "./styles";
import { Header } from "./Header";
import { InfiniteList } from "../ui/InfiniteList";
import { useObservable } from "../hooks/useObservable";
import { LoadingSkelleton } from "./LoadingSkeletton";

export interface BeersProps {
  store: BeersStore;
}

export const Beers: React.FunctionComponent<BeersProps> = ({ store }) => {
  const { state, beers } = useObservable<BeerStoreState>(
    store.state$,
    initialState
  );

  return (
    <main>
      <Header />
      {state === "mounting" ? (
        <LoadingSkelleton />
      ) : (
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
      )}
    </main>
  );
};
