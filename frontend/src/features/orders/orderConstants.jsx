// features/orders/orderConstants.js
import {
  CheckCircle,
  Box,
  Truck,
  Flag,
  Home,
  XCircle,
  Clock,
} from "lucide-react";

const ORDER_STATUS = {
  PLACED: "PLACED",
  RECEIVED: "RECEIVED",
  DISPATCHED: "DISPATCHED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
};

const PAYMENT_STATUS = {
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  PENDING: "Pending",
};

const ORDER_LABELS = {
  ORDER_HISTORY_TITLE: "Order History",
  NO_ORDERS: "No orders found",
};

export { ORDER_STATUS, PAYMENT_STATUS, ORDER_LABELS };

export const getOrderStatusClass = (status) => {
  switch (status) {
    case ORDER_STATUS.DELIVERED:
      return "bg-green-100 text-green-800";
    case ORDER_STATUS.CANCELLED:
      return "bg-red-100 text-red-800";
    case ORDER_STATUS.DISPATCHED:
      return "bg-yellow-100 text-yellow-800";
    case ORDER_STATUS.RECEIVED:
      return "bg-indigo-100 text-indigo-800";
    case ORDER_STATUS.PLACED:
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Status Mapping to Timeline Step Index
export const ORDER_STEP_MAP = {
  [ORDER_STATUS.PLACED]: 0,
  [ORDER_STATUS.RECEIVED]: 1,
  [ORDER_STATUS.DISPATCHED]: 2,
  [ORDER_STATUS.SHIPPED]: 3,
  [ORDER_STATUS.OUT_FOR_DELIVERY]: 4,
  [ORDER_STATUS.DELIVERED]: 5,
};

// Timeline Steps Configuration (icons and labels)
export const ORDER_TIMELINE_STEPS = [
  { label: "Order Placed", icon: <CheckCircle size={20} /> },
  { label: "Order Received", icon: <Clock size={20} /> },
  { label: "Dispatched", icon: <Box size={20} /> },
  { label: "Shipped", icon: <Truck size={20} /> },
  { label: "Out for Delivery", icon: <Flag size={20} /> },
  { label: "Delivered", icon: <Home size={20} /> },
  { label: "Cancelled", icon: <XCircle size={20} /> },
];
