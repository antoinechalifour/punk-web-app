import React from "react";

import { useDependency } from "../hooks/useDependency";
import { useObservable } from "../hooks/useObservable";
import {
  SearchBox,
  Instructions,
  ResultList,
  Loader,
  NoResults,
  NoResultsImage,
  NoResultsMessage,
  SearchContainer,
  Title
} from "./styles";
import { SearchStore } from "./Store";
import { BeerCard } from "../BeerCard";
import { AppBar, AppBarContent } from "../ui/AppBar";
import { BackLink } from "../ui/BackLink";

export interface SearchBeersProps {}

export const SearchBeers: React.FunctionComponent<SearchBeersProps> = () => {
  const store = useDependency(container =>
    container.resolve<SearchStore>("searchService")
  );
  const results = useObservable(store.results$, {
    beers: null,
    query: "",
    isSearching: false
  });

  return (
    <>
      <AppBar>
        <AppBarContent>
          <SearchContainer>
            <BackLink to="/" aria-label="Back to beers list" />
            <SearchBox
              aria-label="Search for a beer"
              name="search-beer"
              placeholder="Search for a beer..."
              onChange={e => store.search(e.target.value)}
            />
            {results.isSearching && <Loader />}
          </SearchContainer>
        </AppBarContent>
      </AppBar>
      {results.beers === null ? (
        <>
          <Title>Search beers</Title>
          <Instructions>
            Start typing to search your favorite beers!
          </Instructions>
        </>
      ) : results.beers.length === 0 ? (
        <>
          <Title>No results found</Title>
          <NoResults>
            <NoResultsImage />
            <NoResultsMessage>
              No match for "<span>{results.query}</span>"
            </NoResultsMessage>
          </NoResults>
        </>
      ) : (
        <>
          <Title>Results for "{results.query}"</Title>
          <ResultList>
            {results.beers.map(beer => (
              <li key={beer.id}>
                <BeerCard
                  id={beer.id}
                  imageUrl={beer.imageUrl}
                  name={beer.name}
                  tagline={beer.tagline}
                />
              </li>
            ))}
          </ResultList>
        </>
      )}
    </>
  );
};
