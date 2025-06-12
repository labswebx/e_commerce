import { createSlice } from "@reduxjs/toolkit";

import { setError, setLoading } from "../../utils/commonReducers";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";

import COUPON_ACTION_TYPES from "./couponActionTypes";
import couponApi from "./couponApi";

export const validateCoupons = createAsyncThunkHandler(
  COUPON_ACTION_TYPES.VALIDATE_COUPON,
  async (code) => couponApi.validateCoupon(code)
);

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupon: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(validateCoupons.pending, setLoading)
      .addCase(validateCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupon = action.payload;
      })
      .addCase(validateCoupons.rejected, setError);
  },
});

// export const {  } = couponSlice.actions;
export default couponSlice.reducer;
