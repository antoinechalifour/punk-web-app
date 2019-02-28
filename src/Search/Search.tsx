import React, { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { useObservable } from "../hooks/useObservable";
import {
  Wrapper,
  SearchBox,
  Instructions,
  ResultList,
  NoResults,
  NoResultsImage,
  NoResultsMessage
} from "./styles";
import { SearchStore, createSearchStore } from "./Store";
import { BeerPreview } from "../BeerPreview";
import { Link } from "react-router-dom";

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
      <Wrapper>
        <div>
          <Link to="/">
            <FiArrowLeft />
          </Link>
          <SearchBox
            placeholder="Search for a beer..."
            onChange={e => getStore().search(e.target.value)}
          />
        </div>
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
