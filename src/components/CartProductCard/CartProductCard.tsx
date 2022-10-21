import { Box, Button } from "@mui/material";
import { ProductCartInfo } from "config/interfaces";
import React from "react";
import {
  CardWrapper,
  DeleteIcon,
  Description,
  Image,
  Price,
  ProductActions,
  ProductData,
  Title,
  TitleWrapper,
  Units,
} from "./CartProductCard.styles";
import TrashCan from "assets/icons/TrashCan.svg";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { CartContext } from "contexts";
import { useNavigate } from "react-router-dom";

export const CartProductCard: React.FC<ProductCartInfo> = ({
  id,
  title,
  image,
  price,
  count,
}) => {
  const navigate = useNavigate();
  const { incrementCountCart, decrementCountCart, removeFromCart } =
    React.useContext(CartContext);

  const onArrouUpButtonClick = () => {
    incrementCountCart(id);
  };
  const onArrouDownButtonClick = () => {
    decrementCountCart(id);
  };
  const onDeleteButtonClick = () => {
    removeFromCart(id);
  };
  const onProductItemClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <CardWrapper>
      <ProductData>
        <Image src={image} alt={title} onClick={onProductItemClick} />
        <TitleWrapper>
          <Title onClick={onProductItemClick}>
            {title.length < 50 ? title : `${title.slice(0, 30)}...`}
          </Title>
          <Description>
            <Units>{count} Units</Units>
            <Price>U$ {(count * price).toFixed(2)}</Price>
          </Description>
        </TitleWrapper>
      </ProductData>
      <ProductActions>
        <Box>
          <Button onClick={onArrouUpButtonClick}>
            <KeyboardArrowUp />
          </Button>
          <Button onClick={onArrouDownButtonClick}>
            <KeyboardArrowDown />
          </Button>
        </Box>
        <DeleteIcon
          onClick={onDeleteButtonClick}
          src={TrashCan}
          alt="Trash can icon"
        />
      </ProductActions>
    </CardWrapper>
  );
};
