import styled from "styled-components";

import notFound from "./not-found.png";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 2rem auto;
  }

  a {
    padding: 1rem 2rem;
    margin: 2rem auto;
    border-radius: 5px;

    background: #5491f7;
    background: linear-gradient(to left, #9675ff, #5491f7);

    color: #fff;
  }
`;

export const Image = styled.img.attrs({
  src: notFound
})`
  max-width: 250px;
  margin-bottom: 2rem;
  opacity: 0.2;
`;

export const Message = styled.p`
  font-weight: 300;
`;
