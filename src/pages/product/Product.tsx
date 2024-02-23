// pages/product/Product.tsx
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import { products, Product } from '../../data/productsData';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product: Product | undefined = products.find((p: Product) => p.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const firstVariation = product.variations[0];

  return (
    <div>
      <Header />
      <h2>{product.name}</h2>
      <p>Uso: {product.category}</p>
      <p>Ideal para: {product.idealUse}</p>
      <div>
        <img
          src={firstVariation.image}
          alt={`${product.name} - ${firstVariation.color}`}
          style={{ width: '50%' }}
        />
        <p>Color: {firstVariation.color}</p>
        <p>Precio: {firstVariation.prize} EUR</p>
      </div>
    </div>
  );
}

export default ProductDetails;