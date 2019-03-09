import styled from "styled-components";

import noResults from "./no-results.png";

export const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Image = styled.img.attrs({
  src: noResults
})`
  max-width: 100px;
  margin-bottom: 2rem;
  opacity: 0.2;
`;

export const Message = styled.p`
  font-weight: 300;

  span {
    font-weight: 500;
  }
`;
