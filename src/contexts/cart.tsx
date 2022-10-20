import { ProductCartInfo } from "config/interfaces";
import React from "react";

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

interface CartContextData {
  products: ProductInfo[];
  cart: ProductCartInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  getProduct: (id: number) => ProductInfo | undefined;
  addToCart: (product: ProductCartInfo) => void;
  removeFromCart: (id: number) => void;
  updateCountCart: (id: number, count: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<ProductInfo[]>([]);
  const [cart, setCart] = React.useState<ProductCartInfo[]>([]);

  const getProduct = (id: number) => {
    return products.find(product => product.id === id);
  };

  const addToCart = (product: ProductCartInfo) => {
    const cartList = [...cart];
    cartList.push(product);
    setCart(cartList);
  };

  const removeFromCart = (id: number) => {
    const cartList = cart.filter(product => product.id !== id);
    setCart(cartList);
  };

  const updateCountCart = (id: number, count: number) => {
    const cartList = cart.map(product => {
      if (product.id === id)
        product.count = count;

      return product;
    });

    setCart(cartList);
  };

  return (
    <CartContext.Provider value={{
      products,
      cart,
      setProducts,
      getProduct,
      addToCart,
      removeFromCart,
      updateCountCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};