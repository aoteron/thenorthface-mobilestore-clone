import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Main from '../../pages/main/Main';
import Product from '../../pages/product/Product';
import ProductDetails from "../../pages/product/Product";
import Cart from "../../pages/cart/Cart";
// import PrivateRoute from "./PrivateRoutes";
import { AuthProvider } from "../contexts/AuthContext";
import { ShoppingCartProvider } from '../../components/contexts/CartContext';


const AppRoutes = () => {
    return (
        <ShoppingCartProvider>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                    path="/" element={<Login />}
                    />
                    <Route
                    path="/main" element={<Main />}
                    />
                    <Route
                    path="/product" element={<Product />}
                    />
                    <Route 
                    path="/product/:productId" element={<ProductDetails />}
                    />
                    <Route
                    path="/cart"
                    element={<Cart />}
                    />
                    <Route
                    path="*"
                    element={<Navigate to="/" />}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
        </ShoppingCartProvider>
    );
};

export default AppRoutes;
