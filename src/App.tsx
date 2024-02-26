// App.tsx
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Main from './pages/main/Main'
import Product from './pages/product/Product';
import ProductDetails from './pages/product/Product';
import Cart from './pages/cart/Cart';

function App () {
  return (
    <div>
      <header>
        <h1>Link test</h1>
        <nav>
          <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/main'>Main</Link></li>
            <li><Link to='/cart'>Cart</Link></li>

          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} /> {/* Ruta para ProductDetails con un parámetro de ruta */}
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Navigate to ='/'/>} />
        
      </Routes>
    </div>
  );
}

export default App;
