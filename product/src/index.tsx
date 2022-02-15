import { BrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IConfigContext } from "./contexts/configContext";

declare global {
  interface Window {
    renderProduct?: Function;
    unmountProduct?: Function;
    localizations: { [key: string]: string };
  }
}

window.renderProduct = (
  containerId: string,
  history: BrowserHistory,
  config: IConfigContext
) => {
  ReactDOM.render(
    <App history={history} config={config} />,
    document.getElementById(containerId)
  );
};

window.unmountProduct = (containerId: string) => {
  const element = document.getElementById(containerId)!;
  ReactDOM.unmountComponentAtNode(element);
};
