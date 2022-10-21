import { Box, Button } from "@mui/material";
import { CartContext } from "contexts";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  Image,
  ProductDescription,
  ProductFooter,
  ProductPrice,
  ProductTitle,
} from "./ProductCard.styles";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  id,
}) => {
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  const onProductTitleClick = () => {
    navigate(`/products/${id}`);
  };

  const onAddToCartButtonClick = () => {
    addToCart({
      id,
      title,
      image,
      price,
    });
  };

  return (
    <CardWrapper>
      <Image
        src={image}
        alt={title}
        onClick={onProductTitleClick}  
      />
      <Box>
        <ProductTitle onClick={onProductTitleClick}>
          {title.length > 50 ? `${title?.slice(0, 50)}...` : title}
        </ProductTitle>
        <ProductDescription>{`${description?.slice(
          0,
          50,
        )}...`}</ProductDescription>
      </Box>
      <ProductFooter>
        <ProductPrice>U$ {price.toFixed(2)}</ProductPrice>
        <Button
          variant="contained"
          onClick={onAddToCartButtonClick}
        >
          Add to cart
        </Button>
      </ProductFooter>
    </CardWrapper>
  );
};
