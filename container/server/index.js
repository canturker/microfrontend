import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import express from "express";
import App from "../src/App";
import routes from "./routes";
import HTML from "../src/components/HTML";

const path = require("path");

const PORT = process.env.PORT || 5001;
const app = express();

app.use("/static", express.static(path.join(__dirname, "../build")));

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <HTML>
          <App />
        </HTML>
      </StaticRouter>
    );
    res.send("<!DOCTYPE html>" + html);
  });
});

app.use(function (req, res) {
  res.status(404);
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <HTML>
        <App />
      </HTML>
    </StaticRouter>
  );
  res.send("<!DOCTYPE html>" + html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
