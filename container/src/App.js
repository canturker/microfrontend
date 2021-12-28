import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import CustomRouter from "./router/customRouter";
import MicroFrontend from "./router/microfrontendRoute";
import { createBrowserHistory } from "history";
import Navbar from "./components/navbar";

const containerHistory = createBrowserHistory();

const productHost = "http://localhost:3001";
const checkoutHost = "http://localhost:3002";

const Product = () => {
  return (
    <MicroFrontend
      history={containerHistory}
      host={productHost}
      name="Product"
    />
  );
};

const Checkout = () => {
  return (
    <MicroFrontend
      history={containerHistory}
      host={checkoutHost}
      name="Checkout"
    />
  );
};

const App = () => (
  <CustomRouter history={containerHistory}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/:id" element={<Product />} />
      <Route path="/checkout/basket" element={<Checkout />} />
      <Route path="/checkout/payment" element={<Checkout />} />
    </Routes>
  </CustomRouter>
);

export default App;
