import styled from "styled-components";

export const BeersList = styled.ul`
  padding: 0 0.5rem;
  max-width: 800px;
  margin: auto;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex-basis: 50%;
      overflow: hidden;
    }
  }
`;

export const LoadMore = styled.div`
  padding: 1rem;

  opacity: 0.75;
  font-size: 1.3rem;
  font-style: italic;
  text-align: center;
`;
