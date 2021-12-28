import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import express from "express";
import App from "../src/App";
const path = require("path");

const PORT = process.env.PORT || 5001;
const app = express();

app.use("/static", express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send("<!DOCTYPE html>" + html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
