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
          <h3 className='flex justify-center text-x18 font-semibold tracking-wide uppercase'>RIPSTOP ICONS</h3>
          <p className='text-x14 font-light mt-2'>Creativity and utility hand in hand since the 70s.</p>
          <button className='bg-primary text-secondary text-x16 font-semibold uppercase mt-6 p-2 pl-6 pr-6 mb-10'>Popular categories</button>
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
        >
      {products.map(product => {
        const firstVariation = product.variations[0];
    
        return (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <Link to={`/product/${product.id}`}>
            <img
              src={firstVariation.image}
              alt={`Imagen de la categoría ${product.category}`}
            />
              <h3 className='mt-6 mb-14 uppercase text-lg underline font-semibold hover:text-tertiary transition-colors duration-200 ease-in-out'>{product.category}</h3>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
};

export default Main;
