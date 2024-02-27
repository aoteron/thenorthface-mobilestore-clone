import { useEffect, useState } from "react";
import { useUsersContext } from "../../../components/contexts/UserContext";
import { useCartContext } from "../../../components/contexts/CartContext";
import CartItemInfo from "./CartItemsInfo";

type ProductCount = {
  [productId: string]: number;
};

export function CartItems() {
  const { user } = useUsersContext();
  console.log({ user })
  const { cartItems } = useCartContext();
  const [totalPrize, setTotalPrize] = useState(0);

  const calculateTotalPrize = () => {
    let prize: number = 0;
    cartItems?.forEach((item) => {
      const product = user?.cart.find((cartItem) => cartItem.id === item.id);
      if (product) {
        prize += item.variations[0].prize;
      }
    });
    setTotalPrize(prize);
  };

  const productCount: ProductCount = {};
  user?.cart.forEach((item) => {
    const productId: string = item.id;
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  console.log(productCount)

  useEffect(() => {
    calculateTotalPrize();
  }, [user?.cart, cartItems]);

  // const product count

  return (
    <>
      {user?.cart.length === undefined && (
        <h3>The cart is empty! 😢</h3>
      )}
      {Object.entries(productCount)?.map(([productId, count]) => {
        const product = cartItems.find((cartItem) => cartItem.id === productId);
        return (
          <div key={productId}>
            <CartItemInfo
              renderPrice={calculateTotalPrize}
              product={product}
              count={count}
            />
          </div>
        );
      })}
      {user?.cart.length > 0 && (
        <div>
          <p>Total:</p>
          <p>{totalPrize} €</p>
        </div>
      )}
    </>
  );
}
