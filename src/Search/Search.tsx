import React, { useRef, useEffect, useState } from "react";

import {
  Wrapper,
  SearchBox,
  Instructions,
  ResultList,
  NoResults,
  NoResultsImage,
  NoResultsMessage
} from "./styles";
import { SearchStore, createSearchStore, SearchResults } from "./Store";
import { BeerPreview } from "../BeerPreview";

import noResults from "./no-results.png";

export interface SearchProps {}

export const Search: React.FunctionComponent<SearchProps> = () => {
  const store = useRef<SearchStore | null>(null);
  const [results, setResults] = useState<SearchResults>({
    beers: null,
    query: ""
  });

  function getStore() {
    if (!store.current) {
      store.current = createSearchStore();
    }

    return store.current;
  }

  useEffect(() => {
    const subscription = getStore().results$.subscribe(setResults);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Wrapper>
        <SearchBox
          placeholder="Search for a beer..."
          onChange={e => getStore().search(e.target.value)}
        />
      </Wrapper>
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
                imageUrl={beer.image_url}
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
