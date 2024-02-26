import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';
import { products, Product } from '../../data/productsData';
import { useCartContext } from '../../components/contexts/CartContext';
import FakeHeader from '../../components/header/FakeHeader';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product: Product | undefined = products.find((p: Product) => p.id === productId);

  if (!product) {
    return <><section><FakeHeader /></section><div>Producto no encontrado</div></>;
  }

  const firstVariation = product.variations[0];

  return (
    <div>
      <section>
      <FakeHeader />
      </section>
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
      <AddToCartButton product={product} />
    </div>
  );
}

export default ProductDetails;

const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button onClick={handleAddToCart}>Añade al carrito</button>
  );
};
