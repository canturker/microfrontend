import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProductDetail from "./pages/product_detail";
import ProductList from "./pages/product_list";
import CustomRouter from "./router/customRouter";
import { createBrowserHistory } from "history";
import { ConfigProvider } from "./contexts/configContext";

const defaultHistory = createBrowserHistory();

type IAppProp = {
  history: any;
  config: any;
};

const App: React.FC<IAppProp> = ({ history = defaultHistory, config }) => {
  return (
    <>
      <ConfigProvider value={config}>
        <CustomRouter history={history}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
        </CustomRouter>
      </ConfigProvider>
    </>
  );
};

export default App;
