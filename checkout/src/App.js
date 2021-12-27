import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Basket from "./pages/basket";
import Payment from "./pages/payment";
import CustomRouter from "./router/customRouter";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <>
      <h3>Micro Checkout</h3>
      <CustomRouter history={history}>
        <Routes>
          <Route exact path="/checkout/basket" element={<Basket />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
        </Routes>
      </CustomRouter>
    </>
  );
};

export default App;
