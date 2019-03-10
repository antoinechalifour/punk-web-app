import styled, { keyframes } from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;

  a {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 1rem;
  }

  input {
    padding-left: 5rem;
  }
`;

const loaderAnimation = keyframes`
  0%, 100% { 
    transform: translateY(-50%) scale(1.0);
  } 50% { 
    transform: translateY(-50%) scale(0.3);
  }
`;

export const Loader = styled.div`
  width: 12px;
  height: 12px;
  background: #fff;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  opacity: 0.6;
  transform-origin: center center;
  border-radius: 50%;

  animation: ${loaderAnimation} 2s linear infinite;
`;

export const SearchBox = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  padding: 1.2rem 3rem;
  border-radius: 20px;

  font-size: 16px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);

  ::placeholder {
    color: #fff;
    opacity: 0.75;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem 0;
  font-size: 2.5rem;
`;

export const Instructions = styled.p`
  padding: 0 2rem;
  text-align: center;
  font-weight: 300;
  opacity: 0.75;
`;
