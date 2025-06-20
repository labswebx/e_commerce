import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../components/ui/Loader";
import DefaultLayout from "../components/layout/DefaultLayout";
import CategoriesLayout from "../components/layout/CategoryLayout";
import UserLayout from "../components/layout/UserLayout";
import ProtectedRoute from "./ProtectedRoutes";

import NotFound from "../pages/common/NotFound";
import About from "../pages/common/About";
import Contact from "../pages/common/Contact";

import OrderStatus from "../pages/cart/OrderStatus";
import AllOrders from "../pages/user/AllOrders";
import SingleOrder from "../pages/user/SingleOrder";
import EditAddress from "../pages/user/EditAddress";
import AllAddresses from "../pages/user/AllAddresses";
import Settings from "../pages/user/Settings";
import UserProfile from "../pages/user/UserProfile";

import Wishlist from "../pages/wishlist/Wishlist";


import ProductsByCategory from "../pages/product/ProductsByCategory";
import TermsAndConditions from "../pages/common/TermsAndConditions";
import ReturnPolicy from "../pages/common/ReturnPolicy";
import PrivacyPolicy from "../pages/common/PrivacyPolicy";
import ShippingPolicy from "../pages/common/ShippingPolicy";
import OrderTracking from "../pages/user/OrderTracking";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Landing/Home"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
const ProductList = lazy(() => import("../pages/product/list/ProductList"));
const ProductDetails = lazy(() =>
  import("../pages/product/details/ProductDetails")
);
const AllCategory = lazy(() => import("../pages/category/AllCategory"));
const CategoryDetails = lazy(() => import("../pages/category/CategoryDetails"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/term-and-conditions" element={<TermsAndConditions />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ProductList />} />
          <Route
            path="/product/category/:id"
            element={<ProductsByCategory />}
          />
          <Route path="/categories" element={<CategoriesLayout />}>
            <Route index element={<AllCategory />} />
            <Route path=":id" element={<CategoryDetails />} />
          </Route>
        </Route>

        {/* Auth Routes (Public) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* Layout for protected pages */}
          <Route element={<DefaultLayout />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/order-confirmation/success"
              element={<OrderStatus />}
            />
            <Route path="/products" element={<ProductList />} />

            {/* Nested User Routes */}
            <Route element={<UserLayout />}>
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/settings" element={<Settings />} />
              <Route path="/user/address" element={<AllAddresses />} />
              <Route path="/user/address/:id" element={<EditAddress />} />
              <Route path="/user/orders" element={<AllOrders />} />
              <Route path="/user/order/:id" element={<SingleOrder />} />
              <Route path="/user/order/track/:id" element={<OrderTracking />} />
            </Route>
          </Route>
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
