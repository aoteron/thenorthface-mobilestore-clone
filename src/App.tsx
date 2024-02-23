// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Main from './pages/main/Main'
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes> 
  );
};

export default App;
