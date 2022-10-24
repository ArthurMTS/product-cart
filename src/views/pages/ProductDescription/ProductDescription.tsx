import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Header } from "components/Header";
import { ProductInfo } from "config/interfaces";
import { CartContext } from "contexts";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesRoutes } from "views/constants/routes";
import {
  AddButton,
  Aside,
  Description,
  DescriptionWrapper,
  Image,
  Main,
  Price,
  Rating,
  Title,
} from "./ProductDescription.styles";

export const ProductDescription: React.FC = () => {
  const [product, setProduct] = React.useState<ProductInfo | undefined>(
    {} as ProductInfo,
  );
  const { getProduct, addToCart } = React.useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const onAddToCartButtonClick = () => {
    if (product) addToCart(product);
    navigate(PagesRoutes.cart);
  };

  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const prod = getProduct(productID);
    setProduct(prod);
  }, [getProduct, location]);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Image src={product?.image} alt={product?.title} />
        <DescriptionWrapper>
          <Title>{product?.title}</Title>
          <Rating>Rating: {product?.rating?.rate}</Rating>
          <Divider />
          <Description>{product?.description}</Description>
        </DescriptionWrapper>
        <Aside>
          <Price>
            <Box component="span">Now, for only:</Box>
            U$ {product?.price?.toFixed(2)}
          </Price>
          <AddButton variant="contained" onClick={onAddToCartButtonClick}>
            Add to cart
          </AddButton>
        </Aside>
      </Main>
    </React.Fragment>
  );
};
