// pages/main/Main.tsx
import Header from '../../components/header/Header';
import { products } from '../../data/productsData';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  
  return (
    <div>
      <Header />
      <h1>Main</h1>
      <section>
        {products.map(product => {
          // Obtén la primera variante del producto
          const firstVariation = product.variations[0];

          return (
            <div key={product.id}>
              <img src={firstVariation.image}
              alt={`Imagen de la categoría ${product.category}`}
              style={{ width: '25%' }} // ! previsualización
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
