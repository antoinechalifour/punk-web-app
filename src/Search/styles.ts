import styled from "styled-components";

import noResults from "./no-results.png";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
  color: #fff;

  > div {
    position: relative;
    max-width: 600px;
    margin: auto;

    a {
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 1rem;

      color: #fff;
      font-size: 24px;
      line-height: 1;
    }

    input {
      padding-left: 5rem;
    }
  }
`;

export const SearchBox = styled.input`
  display: block;
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 20px;

  background: none;
  outline: none;
  border: none;

  font-size: inherit;
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
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    max-width: 800px;
    margin: auto;
    padding: 1rem 0;
  }

  > li {
    flex-basis: 100%;

    @media (min-width: 768px) {
      flex-basis: 50%;
      overflow: hidden;
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
