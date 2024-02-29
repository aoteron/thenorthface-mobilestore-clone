import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { getLocalStorageData, setLocalStorageData } from "../../toolbox/localStorage";
import { products as productsData } from "../../data/productsData";


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
    totalPrice: number;
    setTotalPrice: (id: number) => void;
  };
  
  const ShoppingCartContext = createContext({} as ShoppingCartContext);

  function useCartReducer (cartItems, productsData, setCartItems) {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalprice = () => {
      let price: number = 0;
      cartItems?.forEach((item) => {
        price += item.variations[0].price * item.quantity;

        // const product = productsData.find((productItem) => productItem.id === item.id);
        // if (product) {
        //   price += item.variations[0].price * item.quantity;
        // }
      });

      setTimeout(() => {
        setTotalPrice(price)
        }, 1000);
      console.log("hola", totalPrice);
    };


    function getItemQuantity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
  
    function increaseCartQuantity(id: number) {
      setCartItems((currentItems) => {
        if (!currentItems.find((item) => item.id === id)) {
          return [...currentItems, { id, quantity: 1 }];
        } else {
          calculateTotalprice()
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
    
    return {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, totalPrice, setTotalPrice}
  }
  
  //Custom hook
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
  
    

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, totalPrice, setTotalPrice} = useCartReducer(productsData, cartItems, setCartItems)
  
    return (
      <ShoppingCartContext.Provider
        value={{
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          cartItems,
          cartQuantity,
          totalPrice,
          setTotalPrice,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  }
