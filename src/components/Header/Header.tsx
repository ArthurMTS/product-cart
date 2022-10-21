import React from "react";
import {
  HeaderWrapper,
  LogoBox,
  LogoText,
  NavBar,
  NavLink,
  UserAvatar,
} from "./Header.styles";
import { PagesRoutes } from "views/constants/routes";
import ShoppingBag from "assets/icons/ShoppingBag.svg";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import { CartContext } from "contexts";

export const Header: React.FC = () => {
  const { getItemsQuantity } = React.useContext(CartContext)
  const itemsQuantity = getItemsQuantity();

  return (
    <HeaderWrapper>
      <LogoBox to={PagesRoutes.home}>
        <img src={ShoppingBag} alt="Shopping bag" />
        <LogoText>Dusk Store</LogoText>
      </LogoBox>

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
