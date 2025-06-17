import { createSlice } from "@reduxjs/toolkit";
import { calculateCartTotals, cartInitialState } from "./cartConstants";
import {
  getExistingCartItem,
  handleAddOrUpdateItem,
  handleRemoveItem,
} from "./cartUtils";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items = handleAddOrUpdateItem(state.items, newItem);
      calculateCartTotals(state);
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = handleRemoveItem(state.items, id);

      calculateCartTotals(state);
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = getExistingCartItem(state.items, id);
      if (!existingItem) return;

      state.items = state.items.filter((item) => item._id !== id);
      calculateCartTotals(state);
    },

    updateShippingMethod(state, action) {
      state.shipping = action.payload || 0;
      calculateCartTotals(state);
    },

    setSelectedAddress(state, action) {
      state.selectedAddress = action.payload;
    },

    setShippingMethod(state, action) {
      state.shippingMethod = action.payload;
      calculateCartTotals(state);
    },

    applyDiscount(state, action) {
      state.discount = action.payload;
      calculateCartTotals(state);
    },

    clearCart(state) {
      Object.assign(state, cartInitialState);
    },

    calculateTotals(state) {
      calculateCartTotals(state);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  updateShippingMethod,
  clearCart,
  calculateTotals,
  setSelectedAddress,
  setShippingMethod,
  applyDiscount,
  setUserId,
} = cartSlice.actions;

export default cartSlice.reducer;
