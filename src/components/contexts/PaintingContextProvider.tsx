import { createContext, useState, useContext } from "react";
import { Product } from "../../data/productsData";
import { Outlet } from "react-router-dom";

export interface PaintingContextType {
  paintings: Product[];
  setPaintings: Function;
}

const painting = createContext({} as PaintingContextType);

export const PaintingsContextProvider = () => {
  const [paintings, setPaintings] = useState([]);
  return (
    <painting.Provider value={{ paintings, setPaintings }}>
      {<Outlet />}
    </painting.Provider>
  );
};

export function usePaintingsContext() {
  const context = useContext(painting);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}