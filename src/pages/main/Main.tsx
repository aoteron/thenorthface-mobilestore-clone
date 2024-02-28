// pages/main/Main.tsx
import Header from '../../components/header/Header';
import { products } from '../../data/productsData';
import { Link } from 'react-router-dom';
import Ripstop from '../../assets/ripstop-icons.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Main: React.FC = () => {
  
  return (
    <div>
      <Header />
      
      <div className=''>
        <img src={Ripstop} />
        <section className='flex flex-col items-center mt-6'>
          <h3 className='flex justify-center text-x18 font-semibold tracking-wide uppercase'>Introducing Ripstop Icons</h3>
          <p className='text-x14 font-light mt-2'>Where needs met creativity. Innovation from the 70's</p>
          <button className='bg-primary text-secondary text-x16 font-semibold hover:text-tertiary transition-colors duration-200 ease-in cursor-pointer uppercase mt-6 p-2 pl-6 pr-6 mb-10'>Look at the new collection</button>
        </section>
      </div>

      <Swiper
        slidesPerView={3}
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
              alt={`Imagen de la categoría ${product.category}`}
              className=""
            />
            <Link to={`/product/${product.id}`}>
              <h3 className='mt-6 mb-14 uppercase text-lg underline font-semibold'>{product.category}</h3>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
};

export default Main;
