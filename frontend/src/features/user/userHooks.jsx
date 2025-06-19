import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  registerUser,
  loginUser,
  logout,
  getProfile,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
  deleteUser,
} from "./userSlice";

export const useUser = () => {
  const dispatch = useDispatch();

  const { user, token, isAuthenticated, loading, error, message } = useSelector(
    (state) => state.user
  );

  // Register new user
  const handleRegister = (userData) => dispatch(registerUser(userData));

  // Login
  const handleLogin = (userData) => dispatch(loginUser(userData));

  // Logout
  const handleLogout = () => dispatch(logout());

  // Load Profile
  const fetchProfile = () => dispatch(getProfile());

  // Update Profile
  const handleProfileUpdate = (data) => dispatch(updateProfile(data));

  // Change Password
  const handlePasswordUpdate = (data) => dispatch(changePassword(data));

  // Forgot Password
  const handleForgotPassword = (email) => dispatch(forgotPassword(email));

  // Reset Password
  const handleResetPassword = (data) => dispatch(resetPassword(data));

  // Delete User
  const handleDeleteUser = (data) => dispatch(deleteUser(data));

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    message,
    handleRegister,
    handleLogin,
    handleLogout,
    fetchProfile,
    handleProfileUpdate,
    handlePasswordUpdate,
    handleForgotPassword,
    handleResetPassword,
    handleDeleteUser,
  };
};
