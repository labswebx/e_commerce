// features/cart/cartHooks.js
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  updateShippingMethod,
  clearCart,
  calculateTotals,
} from "./cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return {
    cart,
    addToCart: (product) => dispatch(addItemToCart(product)),
    removeFromCart: (id) => dispatch(removeItemFromCart(id)),
    deleteFromCart: (id) => dispatch(deleteItemFromCart(id)),
    updateShipping: (cost) => dispatch(updateShippingMethod(cost)),
    clearCart: () => dispatch(clearCart()),
    recalculateTotals: () => dispatch(calculateTotals()),
  };
};
