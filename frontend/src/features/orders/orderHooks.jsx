// features/orders/orderHooks.js

import { useDispatch, useSelector } from "react-redux";
import {
  createOrder,
  fetchMyOrders,
  fetchSingleOrder,
  checkPaymentStatus,
  resetOrderState,
} from "./orderSlice";

export const useOrders = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    order,
    myOrders,
    allOrders,
    paymentStatus,
    success,
    totalPages,
    currentPage,
  } = useSelector((state) => state.order);

  // Order actions
  const placeOrder = (data) => dispatch(createOrder(data));
  const getMyOrders = (page = 1) => dispatch(fetchMyOrders(page));
  const getOrderById = (id) => dispatch(fetchSingleOrder(id));
  const checkTxnPaymentStatus = (txnId) => dispatch(checkPaymentStatus(txnId));
  const resetOrder = () => dispatch(resetOrderState());

  return {
    // State
    loading,
    error,
    order,
    myOrders,
    allOrders,
    paymentStatus,
    success,
    totalPages,
    currentPage,

    // Actions
    placeOrder,
    getMyOrders,
    getOrderById,
    checkTxnPaymentStatus,
    resetOrder,
  };
};
