// pages/main/Main.tsx
import Header from '../../components/header/Header';
import { products } from '../../data/productsData';

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
              alt={`Imagen de la categoría ${product.use} para ${product.gender}`}
              style={{ width: '25%' }} // ! previsualización
              />
              <h3>{product.use} para {product.gender}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Main;
