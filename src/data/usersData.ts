import { Product } from "./productsData";

export interface User {
  name: string,
  username: string;
  mail: string;
  password: string;
  cart: Product [];
  wishlist: Product [];
}


const users = [
    {
      "id": "1",
      "Name": "Anna",
      "password": "pass123",
      "cart": [],
      "wishlist": [],
      "email": "anna@example.com"
    },
    {
      "id": "2",
      "Name": "Brian",
      "password": "pass456",
      "cart": [],
      "wishlist": [],
      "email": "brian@example.com"
    },
    {
      "id": "3",
      "Name": "Catherine",
      "password": "pass789",
      "cart": [],
      "wishlist": [],
      "email": "catherine@example.com"
    }
  ]
  
  export default users