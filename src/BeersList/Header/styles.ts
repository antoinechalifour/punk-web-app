import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 2rem;
  z-index: 2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  font-size: 2.5rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
  color: #fff;
`;

export const SearchButton = styled(Link).attrs({
  to: "/search"
})`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  border: none;
  background: none;
  display: block;

  svg {
    color: #fff;
  }
`;
