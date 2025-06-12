import { apiVersion } from "../../config/api";

export const ORDER_API_ENDPOINTS = {
  CREATE_ORDER: `${apiVersion}/order/new`,
  GET_MY_ORDERS: `${apiVersion}/orders/me`,
  GET_SINGLE_ORDER: (id) => `${apiVersion}/order/${id}`,
  CHECK_PAYMENT_STATUS: (txnId) => `${apiVersion}/payment_status/${txnId}`,
};
