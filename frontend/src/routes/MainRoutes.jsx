import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "../components/ui/Loader";
import DefaultLayout from "../components/layout/DefaultLayout";
import NotFound from "../pages/NotFound";
import OrderStatus from "../pages/cart/OrderStatus";
import AllOrders from "../pages/cart/AllOrders";
import SingleOrder from "../pages/cart/SingleOrder";
import ProtectedRoute from "./ProtectedRoutes";
// import ProductDetails from "../pages/product/details/ProductDetails";
import ProductList from "../pages/product/list/ProductList";

// Lazy load components
const Home = lazy(() => import("../pages/Landing/Home"));
const Cart = lazy(() => import("../pages/cart/Cart"));

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
const ProductDetails = lazy(() =>
  import("../pages/product/details/ProductDetails")
);

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes (with layout) */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        {/* Public Routes (auth pages) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        {/*  Private Routes */}

        <Route element={<ProtectedRoute />}>
          <Route element={<DefaultLayout />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/order-confirmation/success"
              element={<OrderStatus />}
            />
            <Route path="/orders" element={<AllOrders />} />
            <Route path="/order/:id" element={<SingleOrder />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Route>
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
