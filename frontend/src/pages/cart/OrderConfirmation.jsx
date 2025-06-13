import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import Toast from "../../components/ui/Toast";

import { useCart } from "../../features/cart/cartHooks";
import { useOrders } from "../../features/orders/orderHooks";

import { formatPrice } from "../../utils/formatter";
import ErrorMessage from "../../utils/ErrorMessage";

import toastMessage from "../../constants/toastMessage";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const {
    items,
    selectedAddress,
    shippingMethod,
    subtotal,
    shipping,
    tax,
    total,
    discount,
    clearCart,
  } = useCart();

  const coupon = useSelector((state) => state.coupon);
  const { placeOrder, error: orderError, loading: orderLoading } = useOrders();
  console.log(items, total);
  useEffect(() => {
    if (!items.length || !selectedAddress) {
      navigate("/cart");
    }
  }, [items, selectedAddress, navigate]);
  console.log(selectedAddress);
  const orderData = {
    shippingAddress: selectedAddress._id || "",
    orderItems: items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
      product: item._id,
    })),
    paymentInfo: {
      transactionId: "TXN" + Date.now(),
      status: "Paid",
      paymentInstrument: shippingMethod,
    },
    paidAt: new Date().toISOString(),
    coupon: coupon?.coupon || "",

    couponDiscount: discount || 0,
    itemsPrice: subtotal,
    taxPrice: tax,
    shippingPrice: typeof shipping === "string" ? 0 : shipping,
    totalPrice: total,
  };

  const handlePlaceOrder = () => {
    placeOrder(orderData).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        clearCart();
        Toast.success(toastMessage.ORDER_CREATE.SUCCESS);
        navigate("/order-confirmation/success");
      } else {
        alert("Failed to place order. Please try again.");
        Toast.success(toastMessage.ORDER_CREATE.ERROR);
      }
    });
  };

  return (
    <div className="max-w-4xl p-6 mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">Review Your Order</h1>
      {orderLoading && <Loader />}
      {orderError && <ErrorMessage message={orderError} />}
      {/* Shipping Address */}
      <div className="p-4 border rounded shadow">
        <h2 className="mb-2 text-lg font-medium">Shipping Address</h2>
        <p>{selectedAddress?.label}</p>
        <p>{selectedAddress?.address}</p>
        <p>{selectedAddress?.city}</p>
      </div>

      {/* Order Items */}
      <div className="p-4 border rounded shadow">
        <h2 className="mb-2 text-lg font-medium">Items</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item._id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <p className="text-right">{formatPrice(item.totalPrice || 0)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Summary */}
      <div className="p-4 border rounded shadow">
        <h2 className="mb-2 text-lg font-medium">Price Details</h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>- {formatPrice(discount)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="pb-4 text-right">
        <Button onClick={handlePlaceOrder} label="Place Order"></Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
