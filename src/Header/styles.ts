import styled from "styled-components";

import searchIcon from "./search-icon.png";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  position: sticky;
  top: -50px;
  padding: 2rem;
  padding-bottom: 80px;
  z-index: 2;

  font-size: 2.5rem;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
  color: #fff;

  + * {
    margin-top: -70px;
    position: relative;
    z-index: 3;
  }
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon
})`
  max-width: 25px;
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
`;
