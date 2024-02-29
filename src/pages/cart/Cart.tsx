// pages/cart/Cart.tsx
import Header from '../../components/header/Header';
import { CartItems } from './components/CartItems';

const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <CartItems />
    </>
  );
};

export default Cart;