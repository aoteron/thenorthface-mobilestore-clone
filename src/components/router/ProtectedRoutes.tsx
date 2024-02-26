import { useAuthState } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;