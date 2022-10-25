import { ProductCartInfo, ProductInfo } from "config/interfaces";
import React from "react";

interface CartContextData {
  products: ProductInfo[];
  cart: ProductCartInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  getProduct: (id: number) => ProductInfo | undefined;
  addToCart: (product: ProductInfo) => void;
  removeFromCart: (id: number) => void;
  incrementCountCart: (id: number) => void;
  decrementCountCart: (id: number) => void;
  getItemsQuantity: () => number;
  getTotal: () => number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<ProductInfo[]>([]);
  const [cart, setCart] = React.useState<ProductCartInfo[]>([]);

  const getProduct = (id: number) =>
    products.find(product => product.id === id);
  const addToCart = (product: ProductInfo) => {
    const cartList = [...cart];
    const isInCart = cartList.some(item => item.id === product.id);
    if (isInCart) return;

    cartList.push({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: 1,
    });
    setCart(cartList);
  };
  const removeFromCart = (id: number) => {
    const cartList = cart.filter(product => product.id !== id);
    setCart(cartList);
  };
  const getItemsQuantity = () =>
    cart.reduce((total, product) => total + product.count, 0);
  const getTotal = () =>
    cart.reduce((total, product) => total + product.count * product.price, 0);
  const incrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id) product.count += 1;

      return product;
    });
    setCart(cartList);
  };
  const decrementCountCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1;

      return product;
    });
    setCart(cartList);
  };
  
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setProducts,
        getProduct,
        addToCart,
        removeFromCart,
        incrementCountCart,
        decrementCountCart,
        getItemsQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
