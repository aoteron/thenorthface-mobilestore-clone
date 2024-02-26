import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Main from '../../pages/main/Main'
import Product from '../../pages/product/Product';
import ProductDetails from '../../pages/product/Product';
import Cart from "../../pages/cart/Cart";
import { PaintingsContextProvider } from "../contexts/PaintingContextProvider";
import { UsersContextProvider } from "../contexts/UserContext";
import ProtectedRoute from "./ProtectedRoutes";
import { AuthProvider } from "../contexts/AuthContext";

const AppRoutes = () => {
    return (
        <div>
          <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<UsersContextProvider />}>
                        <Route path='/' element={<Login />} />
                        <Route element={<PaintingsContextProvider />}>
                            <Route
                                path='/main'
                                element= {<ProtectedRoute component={Main} />}
                            />
                            <Route
                                path='/product'
                                element={<ProtectedRoute component={Product} />} 
                            />
                            <Route 
                                path='/product/:productId'
                                element={<ProtectedRoute component={ProductDetails}/>}
                            />
                            <Route 
                                path='/cart'
                                element={<ProtectedRoute component={Cart}/>}
                            />
                            <Route 
                                path='/*'
                                element={<Navigate to ='/'/>}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
    );
};

export default AppRoutes;
