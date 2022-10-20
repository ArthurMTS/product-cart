import { TextField } from "@mui/material";
import { ProductCartInfo } from "config/interfaces";
import React from "react";
import { CardWrapper, Description, Price, ProductActions, ProductData, Title, TitleWrapper, Units } from "./CartProductCard.styles";
import TrashCan from "assets/icons/TrashCan.svg";

export const CartProductCard: React.FC<ProductCartInfo> = ({
  id,
  title,
  image,
  price,
  count,
}) => {
  return (
    <CardWrapper>
      <ProductData>
        <img src={image} alt={title} height="60px" width="60px" />
        <TitleWrapper>
          <Title>
            {title}
          </Title>
          <Description>
            <Units>
              {count} Units
            </Units>
            <Price>
              U$ {price.toFixed(2)}
            </Price>
          </Description>
        </TitleWrapper>
      </ProductData>
      <ProductActions>
        <TextField type="number" sx={{ width: 60 }} />
        <img src={TrashCan} alt="Trash can icon" style={{ cursor: "pointer" }} />
      </ProductActions>
    </CardWrapper>
  );
};