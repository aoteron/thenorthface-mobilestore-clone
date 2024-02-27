// Header.tsx
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
      <section style={{ width: '393px', height: '110px' }} className="bg-primary text-secondary flex items-end justify-center text-center align-bottom uppercase px-4">
        <p className="text-lg">
          <a href='#' className=' underline hover:text-tertiary transition-colors duration-200 ease-in-out'>Join XPLR PASS</a> and enjoy a 10% discount on your first <br />purchase
        </p>
      </section>

      <header style={{ width: '393px', maxHeight: '60px', paddingLeft: '4px', paddingRight: '4px' }} className='shadow-md'>
        <div className='bg-secondary flex items-center justify-between'>
          <Link to="/">
          <div>
            <img src={menuSharp} style={{ width: '26px' }}/>
          </div>
          </Link>
          <Link to="/">
          <div className='pl-12'>
            <img src={northFaceLogo} alt="The North Face Logo" style={{ width: '83px' }} />
          </div>
          </Link>  
          <div className='flex'>
            <Link to="cart">
            <img src={searchIcon} style={{ width: '29px' }} alt="Search Icon" />
            </Link>
            <Link to="/cart">
            <img src={cartIcon} style={{ width: '29px'}} alt="Carrito" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;