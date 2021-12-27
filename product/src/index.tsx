import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

declare global {
  interface Window {
    renderProduct?: any;
    unmountProduct?: any;
  }
}

window.renderProduct = (containerId: string, history: any) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountProduct = (containerId: string) => {
  const element = document.getElementById(containerId)!;
  ReactDOM.unmountComponentAtNode(element);
};
