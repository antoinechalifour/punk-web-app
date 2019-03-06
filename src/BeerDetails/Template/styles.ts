import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  .appbar {
    top: -175px;
  }
`;

export const Header = styled.header`
  flex: 1;
  padding-bottom: 7.5rem;

  text-align: center;

  .text-row {
    margin: auto;
  }

  .text-row:first-child {
    max-width: 300px;
    height: 2.6rem !important;
  }

  .text-row:last-child {
    max-width: 150px;
  }
`;

export const Content = styled.main`
  position: relative;
  margin-top: -75px;

  section {
    padding: 1rem 0;
    width: 97%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Description = styled.div``;

export const IngredientCategory = styled.div`
  font-weight: 500;
  margin: 1rem 0;
`;

export const IngredientList = styled.ul`
  padding-left: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
`;

export const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BrewerTips = styled.blockquote`
  padding: 2rem;
  margin: 1rem 0;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);
  font-style: italic;

  > :first-child {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  > * {
    max-width: 600px;
    margin: auto;
  }
`;
