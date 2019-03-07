import React from "react";
import { FiSearch } from "react-icons/fi";

import { useDependency } from "../hooks/useDependency";
import { useObservable } from "../hooks/useObservable";

import { BeersStore, BeerStoreState, initialState } from "./store";
import { BeerCard } from "../BeerCard";
import { BeersList, SearchButton } from "./styles";
import { InfiniteList } from "../ui/InfiniteList";
import { LoadingSkelleton } from "./LoadingSkeletton";
import {
  AppBar,
  AppBarContent,
  AppBarActions,
  AppBarTitle
} from "../ui/AppBar";

export interface BeersProps {}

export const Beers: React.FunctionComponent<BeersProps> = ({}) => {
  const store = useDependency(container =>
    container.resolve<BeersStore>("beersService")
  );

  const { state, beers } = useObservable<BeerStoreState>(
    store.state$,
    initialState
  );

  return (
    <main>
      <AppBar>
        <AppBarContent>
          <AppBarTitle>Punk Web App</AppBarTitle>
          <AppBarActions>
            <SearchButton aria-label="Search beers">
              <FiSearch />
            </SearchButton>
          </AppBarActions>
        </AppBarContent>
      </AppBar>
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
                <BeerCard
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
