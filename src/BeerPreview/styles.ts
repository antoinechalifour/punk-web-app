import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 0.5rem;
`;

export const InnerLayout = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Image = styled.img`
  display: block;
  width: 75px;
  max-height: 75px;
  object-fit: contain;
  margin-right: 2rem;
`;

export const Details = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

export const Name = styled.p`
  font-weight: 500;
  color: #031d49;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TagLine = styled.p`
  font-size: 1.2rem;
`;

export const Link = styled(RouterLink)`
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: right;
  color: #373d3f;
`;
