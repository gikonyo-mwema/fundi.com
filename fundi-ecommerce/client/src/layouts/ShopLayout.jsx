// client/src/layouts/ShopLayout.jsx
import React from 'react';
import Header from "../components/AdminView/header.jsx";
import Sidebar from "../components/AdminView/sidebar.jsx";
import Footer from "../components/AdminView/footer.jsx";

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

