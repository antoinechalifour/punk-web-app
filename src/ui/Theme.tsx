import React from "react";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  html {
    font-size: 62%;
  }
  
  body {
    min-height: 100vh;
    background: #f1f1f1;
    
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .Toastify__toast--info {
    background: rgba(0, 0, 0, .95);
    padding: 1.5rem;
    border-radius: 4px;
  }
`;

export const Theme: React.FunctionComponent = ({ children }) => (
  <>
    <Style />
    {children}
  </>
);
