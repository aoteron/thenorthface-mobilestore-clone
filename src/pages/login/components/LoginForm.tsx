// LoginForm.tsx
import React, { useState } from 'react';

// Definición de la interfaz de las propiedades del componente
interface LoginFormProps {
  onSubmit: (formData: { username: string; password: string }) => void; // Función para manejar el envío del formulario
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // Estados locales para almacenar el nombre de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Maneja la presentación del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    onSubmit({ username, password }); // Llama a la función onSubmit con los datos del formulario
  };

  return (
    <section>
      <div>
        <h3>LOG IN TO YOUR ACCOUNT</h3>

          <p>Sign in to view your orders, request a return, and more. And if you are also a member of the XPLR Pass loyalty program, you can enjoy a lot of exclusive benefits.
          </p>

          <p>Haven't you suscribed to XPLR Pass yet? <br></br>
                Create your account in the section of the top
          </p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          {/* Campos de entrada para el nombre de usuario y la contraseña */}
          <input
            type="text"
            placeholder="User"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña cuando cambia el campo de entrada
          />
          
          <div>
            <p>Forgot password?</p>
          </div>

          <div>
            {/* Botón de enviar el formulario */}
            <button type="submit">LOG IN</button>
            <br></br>
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
