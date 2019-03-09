import React from "react";

import { useDependency } from "../hooks/useDependency";
import { useObservable } from "../hooks/useObservable";
import { SearchBox, Instructions, Loader, SearchContainer } from "./styles";
import { SearchStore } from "./Store";
import { AppBar, AppBarContent } from "../ui/AppBar";
import { BackLink } from "../ui/BackLink";
import { Results } from "./Results";
import { NoResults } from "./NoResults";

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
            <BackLink to="/" />
            <SearchBox
              placeholder="Search for a beer..."
              onChange={e => store.search(e.target.value)}
            />
            {results.isSearching && <Loader />}
          </SearchContainer>
        </AppBarContent>
      </AppBar>
      {(() => {
        if (results.isSearching) {
          return <Instructions>Searching beers...</Instructions>;
        } else if (results.beers === null) {
          return (
            <Instructions>
              Start typing to search your favorite beers!
            </Instructions>
          );
        } else if (results.beers.length === 0) {
          return <NoResults query={results.query} />;
        } else {
          return <Results beers={results.beers} />;
        }
      })()}
    </>
  );
};
