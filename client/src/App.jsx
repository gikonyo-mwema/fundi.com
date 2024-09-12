import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout.jsx"; 
import AdminLayout from "./layouts/AdminLayout.jsx"; 
import AdminDashboard from "./pages/admin-view/dashboard.jsx"; 
import AdminProducts from "./pages/admin-view/products.jsx"; 
import AdminFeatures from "./pages/admin-view/features.jsx"; 
import AdminOrders from "./pages/admin-view/orders.jsx"; 
import AuthLogin from "./pages/auth/login.jsx"; 
import AuthRegister from "./pages/auth/register.jsx"; 
import NotFound from "./pages/not-found/index.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout.jsx";
import ShoppingAccounts from "./pages/shopping-view/accounts.jsx";
import CheckAuth from "./components/common/check-auth.jsx";

function App() {

  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          
          <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
            </CheckAuth>
          }>
            
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="accounts" element={<ShoppingAccounts />} />
        </Route>
                
        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<Unauth />} />
      </Routes>
    </div>
  );
}

export default App;

