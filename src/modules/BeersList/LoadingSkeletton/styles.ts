import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;

  li {
    padding: 0.5rem;
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    li {
      flex-basis: 50%;
    }
  }
`;

export const InnerLayout = styled.div`
  display: flex;
  align-items: flex-start;
`;
