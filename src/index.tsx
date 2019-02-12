import "reset.css/reset.css";

import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

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
`;

ReactDOM.render(
  <>
    <Style />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
