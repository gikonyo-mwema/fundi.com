import React, { useState } from 'react'; // Import for useState
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/Auth/layout.jsx";
import AdminPanelLayout from "./layouts/AdminPanelLayout.jsx";
import AdminHome from "./pages/admin-dashboard/AdminHome.jsx";
import ProductManagement from "./pages/admin-dashboard/ProductManagement.jsx";
import FeatureManagement from "./pages/admin-dashboard/FeatureManagement.jsx";
import OrderManagement from "./pages/admin-dashboard/OrderManagement.jsx";
import SignIn from "./pages/user-auth/UserLogin.jsx";
import SignUp from "./pages/user-auth/UserRegister.jsx";
import NotFound from "./pages/user-unauth/Unauth.jsx";
import CheckoutSummary from "./components/ShoppingView/cart-items-content.jsx";
import UserProfile from "./pages/shop-view/Accounts.jsx";
import CheckAuth from "./components/common/CheckAuth.jsx";
import Unauth from "./pages/user-unauth/Unauth.jsx";
import ShopLayout from "./layouts/ShopLayout.jsx";
import ShopHome from "./pages/shop-view/ShopHome.jsx";
import ProductListing from "./pages/shop-view/ProductListing.jsx";
import AdminHeader from './components/AdminView/header.jsx'; // Import for AdminHeader

function App() {
  const isAuthenticated = true;
  const user = null;
  const [isOpen, setIsOpen] = useState(false); // state for isOpen

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminPanelLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="features" element={<FeatureManagement />} />
          <Route path="orders" element={<OrderManagement />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ProductListing />} />
          <Route path="checkout" element={<CheckoutSummary />} />
          <Route path="accounts" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<Unauth />} />
      </Routes>
    </div>
  );
}

export default App;

