// pages/cart/Cart.tsx
import Header from '../../components/header/Header';
import { CartItems } from './components/CartItems';

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <h2>Cart</h2>
      <CartItems />
    </>
  );
};

export default Cart;