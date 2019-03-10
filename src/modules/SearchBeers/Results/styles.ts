import styled from "styled-components";

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
