type CartItemInfoProps = {
  renderPrice: () => void;
  product: Product | undefined; // Make sure Product type is imported or defined
  quantity: number;
  image: string;
};

const CartItemInfo: React.FC<CartItemInfoProps> = ({ renderPrice, product, count, quantity, image }) => {
  if (!product) {
    // Handle the case where product is undefined
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.variations[0].image} alt="Product" />
      <h4>{product.name}</h4>
      <p>Price: {product.variations[0].prize} €</p>
      <p>Quantity: {quantity}</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default CartItemInfo;
