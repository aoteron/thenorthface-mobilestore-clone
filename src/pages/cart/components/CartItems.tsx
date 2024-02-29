import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../../components/contexts/CartContext";
import CartItemInfo from "./CartItemsInfo";
import { products as productsData } from "../../../data/productsData";
import Bin from "../../../assets/icons/trash-bin-sharp.svg" 
import Add from "../../../assets/icons/add-circle-sharp.svg"
import Remove from "../../../assets/icons/remove-circle-sharp.svg"

type ProductCount = {
  [productId: string]: number;
};

export function CartItems() {
  const { cartItems,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart } = useShoppingCart();

  const [totalPrize, setTotalPrize] = useState(0);

  const calculateTotalPrize = () => {
    let prize: number = 0;
    cartItems?.forEach((item) => {
      const product = productsData.find((productItem) => productItem.id === item.id);
      if (product) {
        prize += item.variations[0].prize * item.quantity;
      }
    });
    setTotalPrize(prize);
  };
  const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
    const { increaseCartQuantity } = useShoppingCart();
    const handleAddToCart = () => {
      increaseCartQuantity(parseInt(product.id));
    };
    
    return (
      <button onClick={handleAddToCart}><img src={Add} alt='Añade un producto' style={{ width:'20px' }} /><span className='text-transparent'>+</span></button>
    );}
  
  const TakeFromCartButton: React.FC<{ product: Product }> = ({ product }) => {
      const { decreaseCartQuantity } = useShoppingCart();
      const handleTakeFromCart = () => {
        decreaseCartQuantity(parseInt(product.id));
      };
      
      return (
        <button onClick={handleTakeFromCart}><img src={Remove} alt='Elimina un producto'  style={{ width:'20px' }} /><span className='text-transparent'>-</span></button>
      );}

  const RemoveFromCartButton: React.FC<{ product: Product }> = ({ product }) => {
        const { removeFromCart } = useShoppingCart();
        const handleRemoveFromCart = () => {
          removeFromCart(parseInt(product.id));
        };
        
        return (
          <button onClick={handleRemoveFromCart}><img src={Bin} alt='Elimina el producto' style={{ width:'20px' }}/><span className='text-transparent'>x</span></button>
        );}

  const productCount: ProductCount = {};
  cartItems?.forEach((item) => {
    const productId: string = item.id.toString();
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  useEffect(() => {
    calculateTotalPrize();
  }, [cartItems]);

  return (
    <>
      {cartItems?.length === 0 && (
        <><h3>El carrito está vacío</h3></>
      )}
      {Object.entries(productCount).map(([productId, count]) => {
        const product = productsData.find((productItem) => productItem.id === productId);
        return (
          <div key={productId}>
          {product && (
            <>
              <CartItemInfo
                image= {product.variations[0].image}
                renderPrice={calculateTotalPrize}
                product={product}
                quantity={cartItems.find((cartItem) => cartItem.id === parseInt(productId))?.quantity || 0}
              />
              <div>
                <AddToCartButton product={product} />
                <TakeFromCartButton product={product} />
                <RemoveFromCartButton product={product} />
              </div>
            </>
          )}
        </div>
      );
    })}
      {cartItems?.length > 0 && (
        <div>
          <p>Total:</p>
          <p>{totalPrize} €</p>
        </div>
      )}
    </>
  );
}
