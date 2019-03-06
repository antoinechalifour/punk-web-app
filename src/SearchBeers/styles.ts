import styled from "styled-components";

import noResults from "./no-results.png";

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;

  a {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 1rem;
  }

  input {
    padding-left: 5rem;
  }
`;

export const SearchBox = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  padding: 1.2rem 3rem;
  border-radius: 20px;

  font-size: 16px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);

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
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    max-width: 800px;
    margin: auto;
    padding: 1rem 0;
  }

  > li {
    flex-basis: 100%;
    overflow: hidden;

    @media (min-width: 768px) {
      flex-basis: 50%;
    }
  }
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