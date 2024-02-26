import { Link } from "react-router-dom";

const FakeHeader = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        {/* Aquí no se proporciona un enlace para /product/:productId ya que es dinámico */}
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default FakeHeader;
