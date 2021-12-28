import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import CustomRouter from "./router/customRouter";
import App from "./App";

const containerHistory = createBrowserHistory();

const containerElement = document.getElementById("container");

ReactDOM.hydrate(
  <CustomRouter history={containerHistory}>
    <App history={containerHistory} />
  </CustomRouter>,
  containerElement
);
