import styled from "styled-components";
import { Link } from "react-router-dom";

export const BeersList = styled.ul`
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

export const SearchButton = styled(Link).attrs({
  to: "/search"
})`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  display: block;
  all: unset;
  line-height: 1;

  svg {
    color: #fff;
  }
`;
