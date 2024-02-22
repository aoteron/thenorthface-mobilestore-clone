// Login.tsx
import LoginForm from '../login/components/LoginForm'

const Login: React.FC = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = (formData: { username: string; password: string }) => {
    console.log('Datos del formulario:', formData); // Muestra los datos del formulario en la consola
    // Aquí puedes manejar la lógica de autenticación, como enviar los datos al servidor
  };

  return (
    <div>
      {/* Renderiza el formulario de inicio de sesión y pasa la función handleSubmit como prop */}
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;