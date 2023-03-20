import React from "react";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import AdminNav from "../Admin/AdminNav";
import { useLocation } from "react-router-dom";

const Layout = () => {

    const Location = useLocation();

    return (
        <>
        {
            Location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header/>
        }
                <div>
                    <Routers/>
                </div>
            <Footer/>
        </>
    )
};

export default Layout;