import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Cart,
  Contact,
  Home,
  PagesRoutes,
  ProductDescription,
  ProductList,
} from "views";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.home} element={<Home />} />
      <Route path={PagesRoutes.products} element={<ProductList />} />
      <Route path={PagesRoutes.contacts} element={<Contact />} />
      <Route path={PagesRoutes.cart} element={<Cart />} />
      <Route
        path={PagesRoutes.productDescription}
        element={<ProductDescription />}
      />
    </Routes>
  </BrowserRouter>
);
