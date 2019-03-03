import React, { useRef } from "react";

import { useObservable } from "../hooks/useObservable";
import {
  SearchBox,
  Instructions,
  ResultList,
  NoResults,
  NoResultsImage,
  NoResultsMessage,
  SearchContainer
} from "./styles";
import { SearchStore, createSearchStore } from "./Store";
import { BeerPreview } from "../BeerPreview";
import { AppBar, AppBarContent } from "../ui/AppBar";
import { BackLink } from "../ui/BackLink";

export interface SearchProps {}

export const Search: React.FunctionComponent<SearchProps> = () => {
  const store = useRef<SearchStore | null>(null);
  const results = useObservable(getStore().results$, {
    beers: null,
    query: ""
  });

  function getStore() {
    if (!store.current) {
      store.current = createSearchStore();
    }

    return store.current;
  }

  return (
    <>
      <AppBar>
        <AppBarContent>
          <SearchContainer>
            <BackLink to="/" />
            <SearchBox
              placeholder="Search for a beer..."
              onChange={e => getStore().search(e.target.value)}
            />
          </SearchContainer>
        </AppBarContent>
      </AppBar>
      {results.beers === null ? (
        <Instructions>Start typing to search your favorite beers!</Instructions>
      ) : results.beers.length === 0 ? (
        <NoResults>
          <NoResultsImage />
          <NoResultsMessage>
            No match for "<span>{results.query}</span>"
          </NoResultsMessage>
        </NoResults>
      ) : (
        <ResultList>
          {results.beers.map(beer => (
            <li key={beer.id}>
              <BeerPreview
                id={beer.id}
                imageUrl={beer.imageUrl}
                name={beer.name}
                tagline={beer.tagline}
              />
            </li>
          ))}
        </ResultList>
      )}
    </>
  );
};
