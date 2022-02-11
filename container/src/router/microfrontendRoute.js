import React from "react";
import { isServer } from "../helpers/identifier";

class MicroFrontendRoute extends React.Component {
  componentDidMount() {
    if (isServer()) {
      return;
    }
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    const styleId = `micro-frontend-style-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/assets-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const style = document.createElement("link");
        style.id = styleId;
        style.crossOrigin = "";
        style.rel = "stylesheet";
        style.href = `${host}/${manifest["main.css"]}`;
        document.head.appendChild(style);

        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}/${manifest["main.js"]}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history, config } = this.props;

    window[`render${name}`](`${name}-container`, history, config);
  };

  render() {
    return (
      <>
        <main id={`${this.props.name}-container`} />
      </>
    );
  }
}

MicroFrontendRoute.defaultProps = {
  document: isServer() ? {} : document,
  window: isServer() ? {} : window,
};

export default MicroFrontendRoute;
