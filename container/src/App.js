import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import MicroFrontend from "./router/microfrontendRoute";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";

const productHost = "http://localhost:3001";
const checkoutHost = "http://localhost:3002";

const Product = ({ history }) => {
  return <MicroFrontend history={history} host={productHost} name="Product" />;
};

const Checkout = ({ history }) => {
  return (
    <MicroFrontend history={history} host={checkoutHost} name="Checkout" />
  );
};

const App = ({ history }) => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Product history={history} />} />
      <Route path="/:id" element={<Product history={history} />} />
      <Route path="/checkout/basket" element={<Checkout history={history} />} />
      <Route
        path="/checkout/payment"
        element={<Checkout history={history} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
