import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes } from "views/constants/routes";
import { Home } from "views/pages/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
};