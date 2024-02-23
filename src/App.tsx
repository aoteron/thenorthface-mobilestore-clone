// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
import Header from './components/header/Header'
import Login from './pages/login/Login';
import LoginForm from './pages/login/components/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Utiliza 'Routes' en lugar de 'Switch' */}
        <Route path='/header' element={<Header />} />
        <Route path="/login" element={<Login />} /> {/* Utiliza 'element' en lugar de 'component' */}
        {/* Ruta por defecto */}
        <Route path="/" element={<LoginForm onSubmit={() => {}} />} /> {/* Utiliza 'element' en lugar de 'component' */}
      </Routes> {/* Utiliza 'Routes' en lugar de 'Switch' */}
    </Router>
  );
};

export default App;
