import React from "react";

import STATIC from "../../webpack-assets.json";

const HTML = ({ children }) => {
  return (
    <html>
      <head>
        <title>Server Rendered Microfrontend Container</title>
        <script
          crossOrigin="true"
          src="https://unpkg.com/react@17/umd/react.development.js"
        ></script>
        <script
          crossOrigin="true"
          src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </head>
      <body>
        <div id="container">{children}</div>
        <script src={"/static" + STATIC.main.js} />
      </body>
    </html>
  );
};

export default HTML;
