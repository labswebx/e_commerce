import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  updateShippingMethod,
  clearCart,
  applyDiscount,
  calculateTotals,
} from "./cartSlice";
import { clearCoupon, validateCoupons } from "../coupon/couponSlice";
import { calculateCartTotals } from "./cartConstants";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const {
    items,
    totalQuantity,
    subtotal,
    shipping,
    tax,
    total,
    selectedAddress,
    shippingMethod,
    discount,
    loading,
    error,
  } = cart;

  const getCartItem = (productId) => {
    if (!Array.isArray(items)) return null;
    return items.find((item) => item._id === productId) || null;
  };
  console.log(total);
  return {
    // All cart data
    cart,
    items,
    totalQuantity,
    subtotal,
    shipping,
    tax,
    total,
    selectedAddress,
    shippingMethod,
    discount,
    loading,
    error,

    // Cart utilities
    getCartItem,
    addToCart: (product) => dispatch(addItemToCart(product)),
    removeFromCart: (id) => dispatch(removeItemFromCart(id)),
    deleteFromCart: (id) => dispatch(deleteItemFromCart(id)),
    updateShipping: (cost) => dispatch(updateShippingMethod(cost)),
    clearCart: () => dispatch(clearCart()),
    recalculateTotals: () => dispatch(calculateTotals()),
    applyCoupon: (code, cartValue) =>
      dispatch(validateCoupons({ code, cartValue })),
    applyDiscount: (discountValue) => dispatch(applyDiscount(discountValue)),
    removeCoupon: () => dispatch(clearCoupon()),
  };
};
