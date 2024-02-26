import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Main from '../../pages/main/Main';
import Product from '../../pages/product/Product';
import ProductDetails from "../../pages/product/Product";
import Cart from "../../pages/cart/Cart";
import ProtectedRoute from "./ProtectedRoutes";
import { AuthProvider } from "../contexts/AuthContext";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                    path="/" element={<Login />}
                    />
                    <Route
                    path="/main" element={<ProtectedRoute component={Main} />}
                    />
                    <Route
                    path="/product" element={<ProtectedRoute component={Product}/>}
                    />
                    <Route 
                    path="/product/:productId" element={<ProtectedRoute component={ProductDetails} />}
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
    );
};

export default AppRoutes;
