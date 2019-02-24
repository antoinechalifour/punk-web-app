import styled from "styled-components";

import noResults from "./no-results.png";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 2rem;

  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
  color: #fff;
`;

export const SearchBox = styled.input`
  width: 100%;
  display: block;

  background: none;
  outline: none;
  border: none;

  font-size: inherit;
  color: #fff;

  ::placeholder {
    color: #fff;
    opacity: 0.75;
  }
`;

export const Instructions = styled.p`
  padding: 2rem;
  text-align: center;
  font-weight: 300;
  opacity: 0.75;
`;

export const ResultList = styled.ul`
  padding: 1rem;
`;

export const NoResults = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const NoResultsImage = styled.img.attrs({
  src: noResults
})`
  max-width: 100px;
  margin-bottom: 2rem;
  opacity: 0.2;
`;

export const NoResultsMessage = styled.p`
  font-weight: 300;

  span {
    font-weight: 500;
  }
`;
