import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

declare global {
  interface Window {
    renderProduct?: any;
    unmountProduct?: any;
    localizations: { [key: string]: any };
  }
}

window.renderProduct = (containerId: string, history: any, config: any) => {
  ReactDOM.render(
    <App history={history} config={config} />,
    document.getElementById(containerId)
  );
};

window.unmountProduct = (containerId: string) => {
  const element = document.getElementById(containerId)!;
  ReactDOM.unmountComponentAtNode(element);
};
