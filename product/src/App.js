import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProductDetail from "./pages/product_detail";
import ProductList from "./pages/product_list";
import CustomRouter from "./router/customRouter";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  return (
    <>
      <h3>Micro Product List</h3>
      <CustomRouter history={history}>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/:id" element={<ProductDetail />} />
        </Routes>
      </CustomRouter>
    </>
  );
};

export default App;
