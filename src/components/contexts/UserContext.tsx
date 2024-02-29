// UserContext.tsx
import { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../../data/usersTypes";

export interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

export const userContext = createContext({} as UserContextType);

export const UsersContextProvider = () => {
  const [user, setUser] = useState({} as User);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {<Outlet />}
    </userContext.Provider>
  );
};

export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}