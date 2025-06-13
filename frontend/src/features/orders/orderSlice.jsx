import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunkHandler } from "../../utils/createAsyncThunkHandler";
import { setError, setLoading } from "../../utils/commonReducers";

import orderApi from "./orderApi";
import ORDER_ACTION_TYPES from "./orderActionTypes";

// Thunks
export const createOrder = createAsyncThunkHandler(
  ORDER_ACTION_TYPES.CREATE_ORDER,
  async (orderData) => orderApi.createOrder(orderData)
);

export const fetchMyOrders = createAsyncThunkHandler(
  ORDER_ACTION_TYPES.FETCH_MY_ORDER,
  async () => orderApi.getMyOrders()
);

export const fetchSingleOrder = createAsyncThunkHandler(
  ORDER_ACTION_TYPES.FETCH_SINGLE_ORDER,
  async (id) => orderApi.getSingleOrder(id)
);

export const checkPaymentStatus = createAsyncThunkHandler(
  ORDER_ACTION_TYPES.CHECK_PAYMENT_STATUS,
  async (txnId) => orderApi.checkPaymentStatus(txnId)
);

//  Initial State
const initialState = {
  loading: false,
  error: null,
  order: null,
  myOrders: [],
  allOrders: [],
  paymentStatus: null,
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.loading = false;
      state.error = null;
      state.order = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // Create Order
    builder
      .addCase(createOrder.pending, setLoading)
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.success = true;
      })
      .addCase(createOrder.rejected, setError);

    // My Orders
    builder
      .addCase(fetchMyOrders.pending, setLoading)
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.myOrders = action.payload.orders;
        state.success = action.payload.success;
      })
      .addCase(fetchMyOrders.rejected, setError);

    // Single Order
    builder
      .addCase(fetchSingleOrder.pending, setLoading)
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchSingleOrder.rejected, setError);

    // Payment Status
    builder
      .addCase(checkPaymentStatus.pending, setLoading)
      .addCase(checkPaymentStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentStatus = action.payload;
      })
      .addCase(checkPaymentStatus.rejected, setError);
  },
});

export const { resetOrderState } = orderSlice.actions;
export default orderSlice.reducer;
