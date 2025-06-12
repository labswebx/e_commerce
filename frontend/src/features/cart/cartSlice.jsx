// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
  selectedAddress: null,
  shippingMethod: null,
  discount: 0,
};
// Cart Actions:

// ADD_ITEM - Add new product or increment quantity

// REMOVE_ITEM - Remove product completely

// UPDATE_QUANTITY - Change specific item quantity

// APPLY_DISCOUNT - Add promo code

// SELECT_SHIPPING - Choose delivery method

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.subtotal += newItem.price;
      state.total = state.subtotal + state.shipping + state.tax;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.subtotal -= existingItem.price;
      state.total = state.subtotal + state.shipping + state.tax;
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity -= existingItem.quantity;
      state.subtotal -= existingItem.totalPrice;
      state.total = state.subtotal + state.shipping + state.tax;
    },

    updateShippingMethod(state, action) {
      const shippingCost = action.payload;
      state.shipping = shippingCost;
      state.total = state.subtotal + shippingCost + state.tax;
    },

    setSelectedAddress(state, action) {
      state.selectedAddress = action.payload;
    },

    setShippingMethod(state, action) {
      const { method, cost } = action.payload;
      state.shippingMethod = method;
      state.shipping = cost;
      state.total = state.subtotal + cost + state.tax - state.discount;
    },

    applyDiscount(state, action) {
      state.discount = action.payload;
      state.total =
        state.subtotal + state.shipping + state.tax - state.discount;
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;
      state.shipping = 0;
      state.tax = 0;
      state.total = 0;
      state.discount = 0;
      state.selectedAddress = null;
      state.shippingMethod = null;
    },
    calculateTotals(state) {
      state.subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      state.total = state.subtotal + state.shipping + state.tax;
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
} = cartSlice.actions;

export default cartSlice.reducer;
