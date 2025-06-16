import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import USER_API_ENDPOINTS from "./userApiEndpoints";

export const userApi = {
  register: async (userData) => {
    try {
      const res = await axiosInstance.post(
        USER_API_ENDPOINTS.REGISTER,
        userData
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  login: async (credentials) => {
    try {
      const res = await axiosInstance.post(
        USER_API_ENDPOINTS.LOGIN,
        credentials
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.get(USER_API_ENDPOINTS.LOGOUT);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getUserProfile: async () => {
    try {
      const res = await axiosInstance.get(USER_API_ENDPOINTS.ME);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  updateProfile: async (data) => {
    try {
      const res = await axiosInstance.put(
        USER_API_ENDPOINTS.UPDATE_USER_PROFILE,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  changePassword: async (data) => {
    try {
      const res = await axiosInstance.put(
        USER_API_ENDPOINTS.PASSWORD_UPDATE,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  forgotPassword: async (emailData) => {
    try {
      const res = await axiosInstance.post(
        USER_API_ENDPOINTS.FORGOT_PASSWORD,
        emailData
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  resetPassword: async (token, data) => {
    try {
      const res = await axiosInstance.put(
        USER_API_ENDPOINTS.RESET_PASSWORD(token),
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  deleteUser: async (data) => {
    try {
      const res = await axiosInstance.post(
        USER_API_ENDPOINTS.DELETE_USER,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};
