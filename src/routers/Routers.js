import { Routes, Route, Navigate } from "react-router-dom";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='home'/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="shop/:id" element={<ProductDetails/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="products" element={<Products/>}/>
        </Routes>
    )
}

export default Routers;