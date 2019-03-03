import styled from "styled-components";

export const AppBar = styled.header.attrs({
  className: "appbar"
})`
  position: sticky;
  top: 0;

  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
`;

export const AppBarContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  display: flex;
  align-items: center;

  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const AppBarTitle = styled.h1`
  flex: 1;
  font-size: 2.5rem;
  line-height: 1;
`;

export const AppBarActions = styled.div``;
