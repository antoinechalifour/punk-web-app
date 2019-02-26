import "reset.css/reset.css";

import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { Theme } from "./ui/Theme";
import { App } from "./App";

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
