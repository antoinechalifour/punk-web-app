import "reset.css/reset.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

import { context as DiContext, createContainer } from "./di";
import * as serviceWorker from "./serviceWorker";
import { Theme } from "./ui/Theme";
import { App } from "./App";

const container = createContainer();
ReactDOM.render(
  <DiContext.Provider value={() => container}>
    <Theme>
      <App />
    </Theme>
  </DiContext.Provider>,
  document.getElementById("root")
);

serviceWorker.register({
  onSuccess: () =>
    toast.info("Punk web app is now usable offline", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    }),
  onUpdate: () =>
    toast.info("Refresh to apply updates", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
});
