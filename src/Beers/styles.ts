import styled, { keyframes } from "styled-components";

const beerEnterAnimation = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const BeersList = styled.ul`
  padding: 0 0.5rem;
  max-width: 800px;
  margin: auto;

  li {
    will-change: transform;
    animation: ${beerEnterAnimation} 0.5s ease both;
  }

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
