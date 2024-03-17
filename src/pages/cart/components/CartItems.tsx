import { useShoppingCart } from "../../../components/contexts/CartContext";
import CartItemInfo from "./CartItemsInfo";
import { products as productsData } from "../../../data/productsData";
import Bin from "../../../assets/icons/trash-bin-sharp.svg" 
import Add from "../../../assets/icons/add-circle-sharp.svg"
import Remove from "../../../assets/icons/remove-circle-sharp.svg"
import { products } from '../../../data/productsData';
import { Link } from "react-router-dom";
import XPLRLogo from '../../../assets/icons/xplr-pass-logo.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

type ProductCount = {
  [productId: string]: number;
};

export function CartItems() {
  const { cartItems,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          totalPrice } = useShoppingCart();

  const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
    const { increaseCartQuantity } = useShoppingCart();
    const handleAddToCart = () => {
      increaseCartQuantity(parseInt(product.id));
    };
    
    return (
      <button onClick={handleAddToCart}><img src={Add} alt='Add a product' style={{ width:'20px' }} /><span className='text-transparent'>+</span></button>
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

  return (
    <>
      {cartItems?.length === 0 && (
        <>
          <div className='flex flex-col items-center mt-14'>
            <h3 className="text-x14 mb-4">¡Ups! The cart is empty</h3>
          </div>

          <div className="flex flex-col items-center">
          <Link to={'/main'}>
          <button className='bg-purchase text-secondary text-x16 font-semibold hover:text-secondary hover:bg-primary transition-colors duration-200 ease-in cursor-pointer uppercase p-2 pl-6 pr-6 mb-12'>GO TO THE NEW COLLECTION</button>
          </Link>
          </div>

          <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={5}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=""
          >
        {products.map(product => {
          const firstVariation = product.variations[0];
      
          return (
            <SwiperSlide key={product.id} className="flex flex-col items-center">
              <img
                src={firstVariation.image}
                alt={`Category image ${product.category}`}
              />
              <Link to={`/product/${product.id}`}>
                <h3 className='mt-6 mb-14 uppercase text-lg underline font-semibold hover:text-tertiary transition-colors duration-200 ease-in-out'>{product.category}</h3>
              </Link>
            </SwiperSlide>
          );
        })}
          </Swiper>

          <div className="flex flex-col items-center">

           <section className=''>
            <div style={{ width: '361px', height: '78px' }} className='bg-primary flex flex-col items-center justify-center mt-4 text-secondary'>
              <img src={XPLRLogo} style={{ width: '80px' }} alt="XPLR Logo" />
              <Link to={'/'}>
              <p className='underline hover:text-tertiary transition-colors duration-200 ease-in text-lg mt-1'>Create an account</p>
              </Link>
            </div>
           </section>

           <div className='flex flex-col items-center mt-10 text-tertiary'>
           <Link to={'/'}>
            <h3 className="text-x14 hover:text-primary transition-colors duration-200 ease-in">¿ALREADY HAVE AN ACCOUNT? Sign up!</h3>
           </Link>
          </div>

        </div>
        </>
      )}
      {Object.entries(productCount).map(([productId]) => {
        const product = productsData.find((productItem) => productItem.id === productId);
        return (
          <div key={productId}>
          {product && (
            <>
            <div className='pl-10 pr-10 mt-10'>
              <CartItemInfo
                image={product.variations[0].image}
                renderPrice={totalPrice}
                product={product}
                quantity={cartItems.find((cartItem) => cartItem.id === parseInt(productId))?.quantity || 0}
              />
              <div>
                <AddToCartButton product={product} />
                <TakeFromCartButton product={product} />
                <RemoveFromCartButton product={product} />
              </div>
              </div>
            </>
          )}
        </div>
      );
    })}
      {cartItems?.length > 0 && (
        <div className='text-x14 pl-10 pr-10'>
          <p>Total:</p>
          <p>{totalPrice} €</p>
        </div>
      )}
    </>
  );
}
