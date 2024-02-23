// Header.tsx
//import { useUsersContext } from "../../context/userctxt";

type HeaderProps = NonNullable<unknown>;
  // Define las propiedades que puedas necesitar, aunque en este caso no necesitamos ninguna

// eslint-disable-next-line no-empty-pattern
export function Header({}: HeaderProps) {
    //const userctxt = useUsersContext(); // Utiliza el hook useUsersContext para obtener los datos del usuario

    return (
        <div>
          <h5>Hello</h5> {/* Muestra el nombre del usuario */}
        </div>
      );
    }
    
export default Header;