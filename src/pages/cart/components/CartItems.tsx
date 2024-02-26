import { useEffect, useState } from "react";
import { useUsersContext } from "../../../components/contexts/UserContext";
import { usePaintingsContext } from "../../../components/contexts/PaintingContextProvider";
import CartItemInfo from "./CartItemsInfo";

type ProductCount = {
  [productId: string]: number;
};

export function CartItems() {
  const { user } = useUsersContext();
  const { paintings } = usePaintingsContext();
  const [totalPrize, setTotalPrize] = useState(0);

  // Function to calculate total price at Cart
  const calculateTotalPrize = () => {
    let prize: number = 0;
    user.cart.forEach((item) => {
      const product = paintings.find((painting) => painting.id === item.id);
      if (product) {
        prize += product.variations[0].prize;
      }
    });
    setTotalPrize(prize);
  };

  // Function to add quantity and not repeat the product
  const productCount: ProductCount = {};
  user.cart.forEach((item) => {
    const productId: string = item.id;
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  useEffect(() => {
    calculateTotalPrize();
  }, [user.cart, paintings]);

  return (
    <>
      {user.cart.length === 0 && (
        <h3>The cart is empty! 😢</h3>
      )}
      {Object.entries(productCount).map(([productId, count]) => {
        const product = paintings.find((painting) => painting.id === productId);
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
      {user.cart.length > 0 && (
        <div>
          <p>Total:</p>
          <p>{totalPrize} €</p>
        </div>
      )}
    </>
  );
}
