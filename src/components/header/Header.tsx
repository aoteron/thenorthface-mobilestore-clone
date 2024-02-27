// Header.tsx
// import './header.css';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/icons/search-sharp.svg';
import cartIcon from '../../assets/icons/cart-sharp.svg';
import menuSharp from '../../assets/icons/menu-sharp.svg'
import northFaceLogo from '../../assets/icons/thenorthface-logo.png'

type HeaderProps = NonNullable<unknown>;

// eslint-disable-next-line no-empty-pattern
export function Header({}: HeaderProps) {
  return (
    <div>
      <section className="bg-black text-white w-393 h-110 flex items-end justify-center text-center align-bottom uppercase px-4">
        <p className="text-lg">
          <a href='#' className='transition-colors duration-200 ease-in-out'>Join XPLR PASS</a> and enjoy a 10% discount on your first <br />purchase
        </p>
      </section>

      <header className='navbar'>
        <div className='icon-container'>
          <div className='icon-container__left'>
            <img src={menuSharp} />
          </div>
          <div className='icon-container__logo'>
            <img src={northFaceLogo} alt="The North Face Logo" />
          </div>  
          <div>
            <img src={searchIcon} alt="Search Icon" />
            <Link to="/cart">
            <img src={cartIcon} alt="Carrito" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;