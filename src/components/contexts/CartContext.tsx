import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { getLocalStorageData, setLocalStorageData } from "../../toolbox/localStorage";

type ShoppingCartProviderProps = {
    children: ReactNode;
  };
  
  type CartItem = {
    id: number;
    quantity: number;
  };

  
  type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
  };
  
  const ShoppingCartContext = createContext({} as ShoppingCartContext);
  
  export function useShoppingCart() {
    return useContext(ShoppingCartContext);
  }
  
  export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    
    useEffect(() => {
      // Retrieve cart items from local storage on component mount
      const storedCartItems = getLocalStorageData<CartItem[]>("SHOPPING-CART", []);
      setCartItems(storedCartItems);
    }, []);
  
    useEffect(() => {
      // Update local storage whenever cart items change
      setLocalStorageData("SHOPPING-CART", cartItems);
    }, [cartItems]);
  
  
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  
    function getItemQuantity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
  
    function increaseCartQuantity(id: number) {
      setCartItems((currentItems) => {
        if (!currentItems.find((item) => item.id === id)) {
          return [...currentItems, { id, quantity: 1 }];
        } else {
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
      });
    }
  
    function decreaseCartQuantity(id: number) {
      setCartItems((currentItems) => {
        if ((currentItems.find((item) => item.id === id)?.quantity || 1) === 1) {
          return currentItems.filter((item) => item.id !== id);
        } else {
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      });
    }
  
    function removeFromCart(id: number) {
      setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    }
  
    return (
      <ShoppingCartContext.Provider
        value={{
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          cartItems,
          cartQuantity,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  }
