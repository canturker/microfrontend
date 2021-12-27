import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.renderProduct = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountProduct = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
