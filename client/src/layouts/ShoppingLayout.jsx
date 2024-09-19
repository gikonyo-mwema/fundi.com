import React from 'react';
import Header from "../components/admin-view/header";
import Sidebar from "../components/admin-view/sidebar";
import Footer from "../components/admin-view/footer";

const ShoppingLayout = ({ children }) => {
    return (
        <div className="shopping-layout">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShoppingLayout;

