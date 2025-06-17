// features/checkout/checkoutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  totalSteps: 5,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      if (state.step < state.totalSteps - 1) {
        state.step += 1;
      }
    },
    prevStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
      }
    },
    setTotalSteps: (state, action) => {
      state.totalSteps = action.payload;
    },
    resetCheckout: (state) => {
      state.step = 0;
    },
  },
});

export const { setStep, nextStep, prevStep, setTotalSteps, resetCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
