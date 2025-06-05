import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import {
  fullUserReset,
  setAuthSuccess,
  setError,
  setLoading,
} from "../../utils/commonReducers";

import USER_ACTION_TYPES from "./USER_ACTION_TYPES";
import { userApi } from "./userApi";

function saveUserData(data) {
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
}
const userFromStorage = JSON.parse(localStorage.getItem("user"));
const tokenFromStorage = localStorage.getItem("token");

// Thunks
export const registerUser = createAsyncThunkHandler(
  USER_ACTION_TYPES.REGISTER_USER,
  async (userData) => {
    const data = await userApi.register(userData);
    saveUserData(data);
    return data;
  }
);

export const loginUser = createAsyncThunkHandler(
  USER_ACTION_TYPES.LOGIN_USER,
  async (userData) => {
    const data = await userApi.login(userData);
    saveUserData(data);
    return data;
  }
);

export const getProfile = createAsyncThunkHandler(
  USER_ACTION_TYPES.GET_USER_PROFILE,
  async () => userApi.getProfile()
);

export const updateProfile = createAsyncThunkHandler(
  USER_ACTION_TYPES.UPDATE_PROFILE,
  async (data) => userApi.updateProfile(data)
);

export const changePassword = createAsyncThunkHandler(
  USER_ACTION_TYPES.CHANGE_PASSWORD,
  async (data) => userApi.changePassword(data)
);

export const forgotPassword = createAsyncThunkHandler(
  USER_ACTION_TYPES.FORGOT_PASSWORD,
  async (email) => userApi.forgotPassword(email)
);

export const resetPassword = createAsyncThunkHandler(
  USER_ACTION_TYPES.RESET_PASSWORD,
  async ({ token, data }) => userApi.resetPassword(token, data)
);

export const deleteUser = createAsyncThunkHandler(
  USER_ACTION_TYPES.DELETE_USER,
  async (data) => userApi.deleteUser(data)
);

// Initial state
const initialState = {
  user: userFromStorage || null,
  token: tokenFromStorage || null,
  message: null,
  loading: false,
  error: null,
  isAuthenticated: !!userFromStorage && !!tokenFromStorage,
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    resetUser: fullUserReset,
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, setLoading)
      .addCase(loginUser.fulfilled, setAuthSuccess)
      .addCase(loginUser.rejected, setError)

      // Register
      .addCase(registerUser.pending, setLoading)
      .addCase(registerUser.fulfilled, setAuthSuccess)
      .addCase(registerUser.rejected, setError)

      // Get Profile
      .addCase(getProfile.pending, setLoading)
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(getProfile.rejected, setError)

      // update profile
      .addCase(updateProfile.pending, setLoading)
      .addCase(updateProfile.fulfilled, () => {})
      .addCase(updateProfile.rejected, setError)

      // change password
      .addCase(changePassword.pending, setLoading)
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(changePassword.rejected, setError)

      // forgot password
      .addCase(forgotPassword.pending, setLoading)
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(forgotPassword.rejected, setError)

      // reset password
      .addCase(resetPassword.pending, setLoading)
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(resetPassword.rejected, setError)

      // delete user
      .addCase(deleteUser.pending, setLoading)
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .addCase(deleteUser.rejected, setError);
  },
});

export const { logout, resetUser } = userSlice.actions;
export default userSlice.reducer;
