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
          <button className='bg-primary text-secondary text-x16 font-semibold hover:text-tertiary transition-colors duration-200 ease-in cursor-pointer uppercase mt-6 p-2 pl-6 pr-6 mb-14'>Look at the new collection</button>
        </section>
      </div>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <section className="flex justify-center flex-wrap">
        {products.map(product => {
          const firstVariation = product.variations[0];

          return (
            <div key={product.id} className="flex flex-row p-4">
              <img src={firstVariation.image}
              alt={`Imagen de la categoría ${product.category}`}
              style={{ width: '25%' }}
              />
              <Link to={`/product/${product.id}`} key={product.id}>
              <h3>{product.category}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Main;
