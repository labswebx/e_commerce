// pages/cart/OrderStatus.js
import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FaCheckCircle, FaBox, FaShippingFast } from "react-icons/fa";
import Button from "../../components/ui/Button";

const OrderStatus = () => {
  const location = useLocation();
  const { state } = location;
  const orderId = state?.orderId || "N/A";
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl px-4 py-12 mx-auto text-center">
      <div className="p-8 bg-white rounded-lg shadow-sm">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Success Message */}
        <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
          Order Placed Successfully!
        </h1>
        <p className="mb-6 text-gray-600">
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>

        {/* Order ID */}
        <div className="p-4 mb-8 rounded-lg bg-gray-50">
          <p className="font-medium text-gray-700">Order Number:</p>
          <p className="text-lg font-bold text-gray-600">{orderId}</p>
        </div>

        {/* Next Steps */}
        <div className="p-6 mb-8 text-left bg-gray-100 rounded-lg">
          <h2 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
            <FaBox className="mr-2" />
            What happens next?
          </h2>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>You'll receive an order confirmation email shortly</li>
            <li>We'll notify you when your items ship</li>
            <li>Estimated delivery: 3-5 business days</li>
          </ul>
        </div>

        {/* Tracking Info */}
        <div className="p-6 mb-8 text-left bg-gray-100 rounded-lg">
          <h2 className="flex items-center mb-3 text-lg font-semibold text-gray-800">
            <FaShippingFast className="mr-2" />
            Track Your Order
          </h2>
          <p className="mb-4 text-sm text-gray-700">
            You can track your order in your account or using the link below:
          </p>
          <Button
            variant="primary"
            label="Track Order"
            onClick={() => navigate(`/user/order/track/${orderId}`)}
            className="w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            type="button"
            variant="outline"
            label="Continue Shopping"
            to="/products"
            className="w-full"
          />
          <Button
            type="button"
            variant="primary"
            label="View Order Details"
            onClick={() => navigate(`/user/order/${orderId}`)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
