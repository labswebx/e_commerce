import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import { ORDER_API_ENDPOINTS } from "./orderApiEndpoints";

const orderApi = {
  createOrder: async (orderData) => {
    try {
      const res = await axiosInstance.post(
        ORDER_API_ENDPOINTS.CREATE_ORDER,
        orderData
      );

      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getMyOrders: async () => {
    try {
      const res = await axiosInstance.get(ORDER_API_ENDPOINTS.GET_MY_ORDERS);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getSingleOrder: async (id) => {
    try {
      const res = await axiosInstance.get(
        ORDER_API_ENDPOINTS.GET_SINGLE_ORDER(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  checkPaymentStatus: async (txnId) => {
    try {
      const res = await axiosInstance.get(
        ORDER_API_ENDPOINTS.CHECK_PAYMENT_STATUS(txnId)
      );
      console.log("response payment data", res);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default orderApi;
