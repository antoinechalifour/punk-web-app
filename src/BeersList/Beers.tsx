import React from "react";
import { FiSearch } from "react-icons/fi";

import { BeersStore, BeerStoreState, initialState } from "./store/index";
import { BeerPreview } from "../BeerPreview";
import { BeersList, SearchButton } from "./styles";
import { InfiniteList } from "../ui/InfiniteList";
import { useObservable } from "../hooks/useObservable";
import { LoadingSkelleton } from "./LoadingSkeletton";
import {
  AppBar,
  AppBarContent,
  AppBarActions,
  AppBarTitle
} from "../ui/AppBar";
import { useDependency } from "../hooks/useDependency";

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
            <SearchButton>
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
