import { createSlice } from "@reduxjs/toolkit";

import { setError, setLoading } from "../../utils/commonReducers";
import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";

import COUPON_ACTION_TYPES from "./couponActionTypes";
import couponApi from "./couponApi";
import { applyDiscount } from "../cart/cartSlice";

export const validateCoupons = createAsyncThunkHandler(
  COUPON_ACTION_TYPES.VALIDATE_COUPON,
  async ({ code, cartValue }, dispatch) => {

    const res = await couponApi.validateCoupon({ code, cartValue });
    dispatch(applyDiscount(res.discount)); 
    return res;
  }
);

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    coupons: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCoupon: (state) => {
      state.coupon = null;
      state.discount = 0;
      state.finalPrice = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateCoupons.pending, setLoading)
      .addCase(validateCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(validateCoupons.rejected, setError);
  },
});

export const { clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;
