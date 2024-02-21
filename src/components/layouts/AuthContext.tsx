import { ReactNode, createContext, useState } from 'react';
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

export const AuthContext = createContext({} as AuthContextType); // Export AuthContext to be able to import it in other files

export function AuthContextProvider(props: IAuthContextProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children ? props.children : <Outlet />}
    </AuthContext.Provider>
  );
}