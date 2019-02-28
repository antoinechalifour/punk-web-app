import "reset.css/reset.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

import * as serviceWorker from "./serviceWorker";
import { Theme } from "./ui/Theme";
import { App } from "./App";

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
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
