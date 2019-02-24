import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

const headerEnterAnimation = keyframes`
  from {
    padding-bottom: 8rem;
  }
  to {
    padding-bottom: 9.5rem;
  }
`;

export const Header = styled.header`
  padding: 3.5rem 1rem 9.5rem;

  animation: ${headerEnterAnimation} 0.3s ease;

  color: #fff;
  background: #5491f7;
  background: linear-gradient(to left, #9675ff, #5491f7);

  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  h1 {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    font-size: 2.5rem;
    text-transform: uppercase;
  }

  h1::after {
    content: "";
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 33%;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
    position: relative;
    top: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-style: italic;
  }

  .text-row {
    margin: auto;
  }

  .text-row:first-child {
    max-width: 300px;
    height: 2.5rem !important;
  }

  .text-row:last-child {
    max-width: 150px;
  }
`;

export const Content = styled.main`
  transform: translateY(-7.5rem);

  section {
    padding: 1rem 0;
    width: 97%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto 2rem;
  height: 150px;
  width: 150px;
  object-fit: contain;

  border-radius: 50%;
  border: 3px solid #fff;
  background: #f5f5f5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
`;

export const Card = styled.div`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(84, 145, 247, 0.2);
  border-radius: 5px;
`;

export const CardTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Description = styled.p``;

export const Categories = styled.ul`
  display: flex;
  justify-content: center;

  li {
    display: block;
  }

  li + li {
    margin-left: 0.5rem;
  }
`;

export const CategoryTag = styled.span`
  background: #fff;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid #373d3f;
`;

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

export const InfoGroup = styled.div`
  text-align: center;

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    font-size: 1.2rem;
  }

  span {
    display: block;
  }
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
