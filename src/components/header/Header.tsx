// Header.tsx
import { Link } from "react-router-dom";

type HeaderProps = NonNullable<unknown>;
  // Define las propiedades que puedas necesitar, aunque en este caso no necesitamos ninguna

// eslint-disable-next-line no-empty-pattern
export function Header({}: HeaderProps) {
  return (
    <div>
      <h5>Header</h5> {/* Muestra el nombre del usuario */}

      {/* Añade un enlace al carrito */}
      <Link to="/cart">
        <button>Ir al carrito</button>
      </Link>
    </div>
  );
}

export default Header;