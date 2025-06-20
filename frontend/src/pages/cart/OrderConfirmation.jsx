import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaMapMarkerAlt,
  FaBoxes,
  FaReceipt,
  FaCheckCircle,
} from "react-icons/fa";

import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import Toast from "../../components/ui/Toast";
import OrderItemCard from "./OrderItemCard";

import { useCart } from "../../features/cart/cartHooks";
import { useOrders } from "../../features/orders/orderHooks";

import { formatPrice, formatDate } from "../../utils/formatter";
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

  useEffect(() => {
    if (!items.length || !selectedAddress) {
      navigate("/cart");
    }
  }, [items, selectedAddress, navigate]);

  const orderData = {
    shippingAddress: selectedAddress?._id || "",
    orderItems: items
      .filter((item) => item._id && item.name && item.price)
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.images?.[0]?.url || "",
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
        const orderId = res.payload?.order._id;

        Toast.success(toastMessage.ORDER_CREATE.SUCCESS);
        navigate(`/order-confirmation/success`, { state: orderId });
      } else {
        Toast.error(toastMessage.ORDER_CREATE.ERROR);
      }
    });
  };

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <FaCheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Review Your Order
        </h1>
        <p className="mt-2 text-gray-600">
          Please verify your order details before proceeding
        </p>
      </div>

      {orderLoading && <Loader />}
      {orderError && <ErrorMessage message={orderError} />}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column - Order Details */}
        <div className="space-y-6">
          {/* Shipping Address Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-800">
                Shipping Address
              </h2>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="font-medium">{selectedAddress?.label}</p>
              <p>{selectedAddress?.address}</p>
              {selectedAddress?.landmark && (
                <p>Landmark: {selectedAddress.landmark}</p>
              )}
              <p>
                {selectedAddress?.city}, {selectedAddress?.state} -{" "}
                {selectedAddress?.pincode}
              </p>
              <p>{selectedAddress?.country}</p>
              <p>Phone: +91 {selectedAddress?.contactNumber}</p>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center mb-4">
              <FaReceipt className="w-5 h-5 mr-2 text-purple-500" />
              <h2 className="text-lg font-semibold text-gray-800">
                Payment Method
              </h2>
            </div>
            <div className="text-gray-600">
              <p className="font-medium">
                {shippingMethod?.type === "cod"
                  ? "Cash on Delivery"
                  : "Credit/Debit Card"}
              </p>
              {shippingMethod?.type !== "cod" && (
                <p className="mt-1 text-sm">
                  Card ending in ****{shippingMethod?.cardLast4 || "1234"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          {/* Order Items Card */}
          <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center mb-4">
              <FaBoxes className="w-5 h-5 mr-2 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-800">
                Order Summary
              </h2>
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <OrderItemCard
                  key={item._id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  image={item.images}
                  totalPrice={item.totalPrice}
                />
              ))}
            </div>
          </div>

          {/* Price Summary Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Price Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span className="font-medium">- {formatPrice(discount)}</span>
                </div>
              )}
              <div className="pt-3 mt-3 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-lg font-bold text-gray-800">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-between">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          label="Back to Cart"
          size="lg"
          className="w-full sm:w-auto"
        />
        <Button
          variant="primary"
          onClick={handlePlaceOrder}
          label="Confirm & Place Order"
          size="lg"
          className="w-full sm:w-auto"
        />
      </div>

      {/* Order Note */}
      <div className="p-4 mt-8 text-sm text-center text-gray-500 rounded-lg bg-gray-50">
        <p>
          By placing this order, you agree to our Terms of Service and Privacy
          Policy.
        </p>
        <p className="mt-1">
          Estimated delivery date:{" "}
          {formatDate(new Date(Date.now() + 5 * 24 * 60 * 60 * 1000))}
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
