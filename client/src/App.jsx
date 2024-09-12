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

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}></Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;

