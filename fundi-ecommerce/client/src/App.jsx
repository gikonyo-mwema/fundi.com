import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/Auth/AuthLayout.jsx"; // Adjusted path
import AdminPanelLayout from "./layouts/AdminPanelLayout.jsx"; // Adjusted path
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.jsx"; // Adjusted path
import AdminProducts from "./pages/admin-dashboard/AdminProducts.jsx"; // Adjusted path
import AdminFeatures from "./pages/admin-dashboard/AdminFeatures.jsx"; // Adjusted path
import AdminOrders from "./pages/admin-dashboard/AdminOrders.jsx"; // Adjusted path
import SignIn from "./components/Auth/SignIn.jsx"; // Adjusted path
import SignUp from "./components/Auth/SignUp.jsx"; // Adjusted path
import NotFound from "./pages/not-found/NotFound.jsx"; // Adjusted path
import CheckoutSummary from "./components/Checkout/CheckoutSummary.jsx"; // Adjusted path
import UserProfile from "./components/User/UserProfile.jsx"; // Adjusted path
import CheckAuth from "./common/CheckAuth.jsx"; // Adjusted path

import Unauth from "./pages/not-found/Unauth.jsx"; // Adjusted path
import ShopLayout from "./layouts/ShopLayout.jsx"; // Adjusted path
import ShoppingHome from "./pages/shop-view/ShoppingHome.jsx"; // Adjusted path
import ShoppingListing from "./pages/shop-view/ShoppingListing.jsx"; // Adjusted path

function App() {
  const isAuthenticated = true;
  const user = null;

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
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
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

