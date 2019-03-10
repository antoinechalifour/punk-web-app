import React, { createRef, useEffect } from "react";

import { useDependency } from "../../hooks/useDependency";
import { useObservable } from "../../hooks/useObservable";

import {
  SearchBox,
  Instructions,
  Loader,
  SearchContainer,
  Title
} from "./styles";
import { AppBar, AppBarContent } from "../../ui/AppBar";
import { BackLink } from "../../ui/BackLink";

import { Results } from "./Results";
import { NoResults } from "./NoResults";
import { ViewModel } from "./types";

export interface SearchBeersProps {}

export const SearchBeers: React.FunctionComponent<SearchBeersProps> = () => {
  const inputRef = createRef<HTMLInputElement>();
  const store = useDependency(container =>
    container.resolve<ViewModel>("viewModel")
  );
  const results = useObservable(store.results$, {
    beers: null,
    query: "",
    isSearching: false
  });

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <AppBar>
        <AppBarContent>
          <SearchContainer>
            <BackLink to="/" aria-label="Back to beers list" />
            <SearchBox
              ref={inputRef}
              aria-label="Search for a beer"
              name="search-beer"
              placeholder="Search for a beer..."
              onChange={e => store.search(e.target.value)}
            />
            {results.isSearching && <Loader />}
          </SearchContainer>
        </AppBarContent>
      </AppBar>
      {(() => {
        if (results.isSearching) {
          return (
            <>
              <Title>Results for "{results.query}"</Title>
              <Instructions>Searching...</Instructions>
            </>
          );
        } else if (results.beers === null) {
          return (
            <>
              <Title>Search beers</Title>
              <Instructions>
                Start typing to search your favorite beers!
              </Instructions>
            </>
          );
        } else if (results.beers.length === 0) {
          return <NoResults query={results.query} />;
        } else {
          return <Results query={results.query} beers={results.beers} />;
        }
      })()}
    </>
  );
};
