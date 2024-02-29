import { Link } from "react-router-dom";

type CartItemInfoProps = {
  renderPrice: () => void;
  product: Product | undefined; // Make sure Product type is imported or defined
  quantity: number;
  image: string;
};

const CartItemInfo: React.FC<CartItemInfoProps> = ({ renderPrice, product, count, quantity, image }) => {
  if (!product) {
    // Handle the case where product is undefined
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='text-x14'>
      <Link to={`/product/${product.id.toString()}`}>
      <img src={product.variations[0].image} alt={product.variations[0].name} />
      </Link>
      <h4 className='mt-4'>{product.name}</h4>
      <p className='mt-2'>Precio: {product.variations[0].price} €</p>
      <p className='mt-2'>Cantidad: {quantity}</p>
      <p className='mt-2'>{count}</p>
    </div>
  );
};

export default CartItemInfo;
