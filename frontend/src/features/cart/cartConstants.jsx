import { Box, CheckCircle, CreditCard, Truck } from "lucide-react";

export const cartInitialState = {
  userId: null,
  items: [],
  totalQuantity: 0,
  subtotal: 0,
  shipping: 20,
  tax: 0,
  total: 0,
  selectedAddress: null,
  shippingMethod: null,
  discount: 0,
};

export const calculateCartTotals = (state) => {
  const items = state?.items || [];

  state.subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  state.totalQuantity = items.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const shipping = typeof state.shipping === "number" ? state.shipping : 0;
  const tax = typeof state.tax === "number" ? state.tax : 0;
  const discount = typeof state.discount === "number" ? state.discount : 0;

  state.total = state.subtotal + shipping + tax - discount;
};

export const cartSteps = [
  { label: "Cart", icon: <Box size={20} /> },
  { label: "Address", icon: <Box size={20} /> },
  { label: "Shipping", icon: <Truck size={20} /> },
  { label: "Payment", icon: <CreditCard size={20} /> },
  { label: "Confirmation", icon: <CheckCircle size={20} /> },
];

export const shippingOptions = [
  {
    id: "free",
    label: "Free",
    description: "Cash On Delivery",
    date: "17 Oct, 2023",
  },
];
