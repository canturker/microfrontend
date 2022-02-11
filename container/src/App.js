import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MicroFrontend from "./router/microfrontendRoute";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";

const productHost = "http://localhost:3001";
const checkoutHost = "http://localhost:3002";

const Product = ({ history, config }) => {
  return (
    <MicroFrontend
      history={history}
      config={config}
      host={productHost}
      name="Product"
    />
  );
};

const Checkout = ({ history, config }) => {
  return (
    <MicroFrontend
      history={history}
      config={config}
      host={checkoutHost}
      name="Checkout"
    />
  );
};
const APP_CONFIG = {
  API_URL: "ru",
  PROJECT_LANG: "ru",
};
const App = ({ history }) => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={<Product history={history} config={APP_CONFIG} />}
      />
      <Route
        path="/:id"
        element={<Product history={history} config={APP_CONFIG} />}
      />
      <Route
        path="/checkout/basket"
        element={<Checkout history={history} config={APP_CONFIG} />}
      />
      <Route
        path="/checkout/payment"
        element={<Checkout history={history} config={APP_CONFIG} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
