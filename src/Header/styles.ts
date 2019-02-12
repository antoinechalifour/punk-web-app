import styled from "styled-components";

export const Wrapper = styled.header`
  position: sticky;
  top: -50px;
  padding: 2rem;
  padding-bottom: 80px;
  z-index: 2;

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
