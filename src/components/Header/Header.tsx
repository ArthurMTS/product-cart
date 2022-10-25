import React from "react";
import {
  HeaderWrapper,
  NavBar,
  NavLink,
  UserAvatar,
} from "./Header.styles";
import { PagesRoutes } from "views/constants/routes";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import { CartContext } from "contexts";
import { Logo } from "components";

export const Header: React.FC = () => {
  const { getItemsQuantity } = React.useContext(CartContext);
  const itemsQuantity = getItemsQuantity();

  return (
    <HeaderWrapper>
      <Logo />

      <NavBar>
        <NavLink to={PagesRoutes.home}>Home</NavLink>
        <NavLink to={PagesRoutes.products}>Products</NavLink>
        <NavLink to={PagesRoutes.contacts}>Contact</NavLink>
        <NavLink to={PagesRoutes.cart}>
          <img src={ShoppingCart} alt="Shopping cart" />
          {itemsQuantity}
        </NavLink>

        <UserAvatar
          src="https://avatars.githubusercontent.com/u/73958393?v=4"
          alt="user avatar"
        />
      </NavBar>
    </HeaderWrapper>
  );
};
