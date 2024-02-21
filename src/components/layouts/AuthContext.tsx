import { ReactNode, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthContextProps {
  children?: ReactNode;
}

interface AuthContextType {
  user: any;
  setUser: any;
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  cart: number[];
  wishlist: number[];
}

const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: IAuthContextProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children ? props.children : <Outlet />}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a DataContextProvider');
  }

  return context;
}