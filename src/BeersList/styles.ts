import styled from "styled-components";

export const BeersList = styled.ul`
  padding: 2rem;
  max-width: 800px;
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      flex-basis: 50%;
      overflow: hidden;
    }
  }
`;
