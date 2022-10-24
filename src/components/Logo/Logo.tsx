import React from "react";
import { PagesRoutes } from "views";
import { LogoBox, LogoText } from "./Logo.styles";
import ShoppingBag from "assets/icons/ShoppingBag.svg";

export const Logo: React.FC = () => (
  <LogoBox to={PagesRoutes.home}>
    <img src={ShoppingBag} alt="Shopping bag" />
    <LogoText>Dusk Store</LogoText>
  </LogoBox>
);
