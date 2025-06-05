export const ORDER_API_ENDPOINTS = {
  CREATE_ORDER: "/order/new",
  GET_MY_ORDERS: "/orders/me",
  GET_SINGLE_ORDER: (id) => `/order/${id}`,
  CHECK_PAYMENT_STATUS: (txnId) => `/payment_status/${txnId}`,
};
