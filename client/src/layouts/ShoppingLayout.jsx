import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

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

