import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes } from "views/constants/routes";
import { Home } from "views/pages/Home";
import { ProductList } from "views/pages/ProductList";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home />}
        />
        <Route
          path={PagesRoutes.products}
          element={<ProductList />}
        />
      </Routes>
    </BrowserRouter>
  );
};