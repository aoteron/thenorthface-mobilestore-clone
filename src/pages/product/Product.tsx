import Header from '../../components/header/Header';
import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../../data/productsData';
import { useShoppingCart} from '../../components/contexts/CartContext';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product: Product | undefined = products.find((p: Product) => p.id === productId);
  console.log("hey===>", productId);

  const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
    const { increaseCartQuantity } = useShoppingCart();
    
    const handleAddToCart = () => {
      increaseCartQuantity(parseInt(product.id));
    };
    
    return (
      <button onClick={handleAddToCart} className='bg-purchase text-secondary text-x16 font-semibold hover:bg-primary transition-colors duration-200 ease-in cursor-pointer uppercase mt-6 p-3 pl-6 pr-6 mb-2'>Añadir al carrito</button>
    );
  };
  

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const firstVariation = product.variations[0];

  return (
    <div>

      <Header />
      <div className='pl-10 pr-10 mt-4'>
        <div className='flex flex-row text-x14 text-tertiary'>
        <Link to={'/main'}>
          <p className='text-tertiary hover:text-primary'>{'/'}  ACTIVIDAD</p>
        </Link>
          <p className='pl-1'> / {product.category}</p>
        </div>
        <h2 className='text-x16'>{product.name}</h2>
        <p className='text-x14 font-light tracking-tight uppercase text-tertiary mt-4 mb-4'>Escribe la primera opinión</p>
        <p className='text-x16 mt-4'>€ {firstVariation.price}</p>

        <div>
          <img
            className='mb-6'
            src={firstVariation.image}
            alt={`${product.name} - ${firstVariation.color}`}
          />
            <div className='text-x14 font-semibold flex'>
              <p className='uppercase tracking-tight text-primary'>Color</p>
              <p className='pl-4 text-tertiary'> {firstVariation.color}</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
          <AddToCartButton product={product} />
          <p className='mt-6 mb-12 text-tertiary'>Envíos y devoluciones gratis</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
