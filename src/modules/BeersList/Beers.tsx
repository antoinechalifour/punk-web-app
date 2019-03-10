import React from "react";
import { FiSearch } from "react-icons/fi";

import { useDependency } from "../../hooks/useDependency";
import { useObservable } from "../../hooks/useObservable";

import { BeerCard } from "../../ui/BeerCard";
import { InfiniteList } from "../../ui/InfiniteList";
import {
  AppBar,
  AppBarContent,
  AppBarActions,
  AppBarTitle
} from "../../ui/AppBar";

import { BeersList, SearchButton } from "./styles";
import { LoadingSkelleton } from "./LoadingSkeletton";
import { ViewModel, ViewModelState } from "./types";
import { initialState } from "./ViewModel";

export interface BeersProps {}

export const Beers: React.FunctionComponent<BeersProps> = ({}) => {
  const viewModel = useDependency(container =>
    container.resolve<ViewModel>("viewModel")
  );

  const { state, beers } = useObservable<ViewModelState>(
    viewModel.state$,
    initialState
  );

  const showSkeleton =
    state === "mounting" || (state === "loading" && beers.length === 0);

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
      {showSkeleton ? (
        <LoadingSkelleton />
      ) : (
        <InfiniteList
          renderLoader={() => <>Loading...</>}
          requestMoreItems={viewModel.fetchMore}
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
