import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../../data/productsData";

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

const cartContext = createContext({} as CartContextType);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <cartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext debe ser usado dentro de un CartContextProvider");
  }
  return context;
}
