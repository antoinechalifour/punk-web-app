import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
`;

export const CardContent = styled.div`
  padding: 2rem;
`;

export const CardTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #737373;
`;
