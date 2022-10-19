import { Header } from "components/Header";
import { ProductCard } from "components/ProductCard";
import { api } from "config/api";
import React from "react";
import { Main } from "./ProductList.styles";

interface ProductInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
  price: number;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<ProductInfo[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const result = await api.get("/products");

      setProducts(result.data);
    };

    fetchProducts();
  }, [api]);

  return (
    <React.Fragment>
      <Header />
      <Main>
        {products?.map(product => 
          <ProductCard
            key={product?.id}
            id={product?.id}
            image={product?.image}
            title={product?.title}
            description={product?.description}
            price={product?.price}
          />  
        )}
      </Main>
    </React.Fragment>
  );
};