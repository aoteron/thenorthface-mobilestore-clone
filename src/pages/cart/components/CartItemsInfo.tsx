import { useState } from "react";
import { Product, ProductVariation } from "../../../data/productsData";
import { useUsersContext } from "../../../components/contexts/UserContext";

type Props = {
  product: Product | undefined;
  variation?: ProductVariation | undefined;
  count: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderPrice: Function;
};

function CartItemInfo({ product, variation, count, renderPrice }: Props) {
  const [counter, setCounter] = useState(count);
  const loggedUserCart = useUsersContext().user.cart;

  const addToUserCart = () => {
    setCounter((prevState) => prevState + 1);
    if (loggedUserCart && product) {
      loggedUserCart.push(product);
    }
    console.log(loggedUserCart);
    renderPrice();
  };

  const removeFromUserCart = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
    if (loggedUserCart && product) {
      const index = loggedUserCart.findIndex((element) => element.id === product.id);
      loggedUserCart.splice(index, 1);
    }
    console.log(loggedUserCart);
    renderPrice();
  };

  const handleDelete = () => {
    for (let i = 0; i < counter; i++) {
      removeFromUserCart();
    }
  };

  return (
    <>
      {product && (
        <div key={product.id}>
          <div>
            <h4>{product.name}</h4>
            {variation && <p>{variation.prize} €</p>}
            <div>
              <button onClick={removeFromUserCart}>-</button>
              <p>{counter}</p>
              <button onClick={addToUserCart}>+</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItemInfo;
