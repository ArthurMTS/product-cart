import { CartProductCard } from "components/CartProductCard";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { CartContext } from "contexts";
import React from "react";
import {
  BuyButton,
  CartContent,
  CartProducts,
  CartSummary,
  CartText,
  Main,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
} from "./Cart.styles";

export const Cart: React.FC = () => {
  const { cart, getTotal } = React.useContext(CartContext);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <CartText>Your cart</CartText>

        <CartContent>
          <CartProducts>
            {cart?.map(product => (
              <CartProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                count={product.count}
              />
            ))}
          </CartProducts>
          <CartSummary>
            <SummaryItem>
              <SummaryLabel>Shipping</SummaryLabel>
              <SummaryValue>U$ 0.00</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Discount</SummaryLabel>
              <SummaryValue>U$ 0.00</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Total</SummaryLabel>
              <SummaryValue>U$ {getTotal().toFixed(2)}</SummaryValue>
            </SummaryItem>
            <BuyButton variant="contained">Make purchase</BuyButton>
          </CartSummary>
        </CartContent>
      </Main>
      <Footer />
    </React.Fragment>
  );
};
