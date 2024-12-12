import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Common/Navbar";
import Footer from "../Pages/Common/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
