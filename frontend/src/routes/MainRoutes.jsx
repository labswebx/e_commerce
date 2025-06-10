import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "../components/ui/Loader";
import DefaultLayout from "../components/layout/DefaultLayout";
import NotFound from "../pages/NotFound";

// Lazy load components
const Home = lazy(() => import("../pages/Landing/Home"));
const Cart = lazy(() => import("../pages/cart/Cart"));

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public Routes (with layout) */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Public Routes (auth pages) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        {/*  Private Routes */}
        {/*
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        */}

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
