import { Product } from "./productsData";

export interface User {
  name: string,
  username: string;
  mail: string;
  password: string;
  cart: Product [];
  wishlist: Product [];
}