import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import NoData from "../../utils/NoData";
import { formatDate, getShortOrderId } from "../../utils/formatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { useOrders } from "../../features/orders/orderHooks";
import Button from "../../components/ui/Button";
import { FaBox, FaCheckCircle, FaShippingFast, FaStore } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const OrderTracking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOrderById, order, loading, error } = useOrders();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (id) {
      getOrderById(id);
    }
  }, [id]);

  useEffect(() => {
    if (order?.order) {
      const status = order.order.orderStatus.toLowerCase();
      const steps = ["processing", "shipped", "out for delivery", "delivered"];
      const currentStep = steps.findIndex((step) => status.includes(step));
      setActiveStep(currentStep >= 0 ? currentStep : 0);
    }
  }, [order]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!order?.order) return <NoData message="No order found" />;

  const orderData = order.order;
  const { shippingAddress, paymentInfo, orderItems } = orderData;

  const statusSteps = [
    {
      title: "Order Placed",
      description: "We've received your order",
      icon: <FaStore className="text-gray-400" />,
      activeIcon: <FaStore className="text-green-500" />,
    },
    {
      title: "Processing",
      description: "We're preparing your order",
      icon: <FaBox className="text-gray-400" />,
      activeIcon: <FaBox className="text-green-500" />,
    },
    {
      title: "Shipped",
      description: "Your order is on the way",
      icon: <FaShippingFast className="text-gray-400" />,
      activeIcon: <FaShippingFast className="text-green-500" />,
    },
    {
      title: "Delivered",
      description: "Order delivered successfully",
      icon: <FaCheckCircle className="text-gray-400" />,
      activeIcon: <FaCheckCircle className="text-green-500" />,
    },
  ];

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
          Track Order #{getShortOrderId(orderData._id)}
        </h1>
        <Button
          variant="ghost "
          onClick={() => navigate(`/user/order/${orderData._id}`)}
          label="View Order Details"
          size="sm"
          className="bg-transparent hover:text-gray-700"
        />
      </div>

      {/* Tracking Progress */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 md:left-8 -ml-px w-0.5 bg-gray-200"></div>
          <div
            className="absolute top-0 bottom-0 left-4 md:left-8 -ml-px w-0.5 bg-green-500 transition-all duration-500"
            style={{
              height: `${(activeStep / (statusSteps.length - 1)) * 100}%`,
            }}
          ></div>

          <ul className="space-y-8">
            {statusSteps.map((step, index) => (
              <li key={index} className="relative">
                <div className="flex items-start">
                  <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 md:-left-0 ring-8 ring-white">
                    {index <= activeStep ? step.activeIcon : step.icon}
                  </div>
                  <div className="ml-8 md:ml-12">
                    <h3
                      className={`text-lg font-medium ${
                        index <= activeStep ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1 ${
                        index <= activeStep ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                    {index === 0 && (
                      <p className="mt-1 text-sm text-gray-500">
                        {formatDate(orderData.createdAt)}
                      </p>
                    )}
                    {index === statusSteps.length - 1 &&
                      orderData.deliveredAt && (
                        <p className="mt-1 text-sm text-gray-500">
                          Delivered on {formatDate(orderData.deliveredAt)}
                        </p>
                      )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Order Summary */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
        {/* Shipping Info */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="flex items-center mb-4 text-xl font-semibold text-gray-800">
            <FaShippingFast className="mr-2 text-blue-500" />
            Shipping Information
          </h2>
          <div className="space-y-2 text-gray-600">
            <p className="font-medium">{shippingAddress.label}</p>
            <p>{shippingAddress.address}</p>
            {shippingAddress.landmark && (
              <p>Landmark: {shippingAddress.landmark}</p>
            )}
            <p>
              {shippingAddress.city}, {shippingAddress.state} -{" "}
              {shippingAddress.pincode}
            </p>
            <p>{shippingAddress.country}</p>
            <p>Phone: +91 {shippingAddress.contactNumber}</p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="flex items-center mb-4 text-xl font-semibold text-gray-800">
            <MdPayment className="mr-2 text-purple-500" />
            Payment Information
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  paymentInfo.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {capitalizeFirstLetter(paymentInfo.status)}
              </span>
            </p>
            <p>
              <span className="font-medium">Method:</span>{" "}
              {paymentInfo.paymentMethod}
            </p>
            {paymentInfo.paymentMethod === "card" && (
              <p>
                <span className="font-medium">Card:</span> **** **** ****{" "}
                {paymentInfo.cardLast4}
              </p>
            )}
            <p>
              <span className="font-medium">Amount:</span> ₹
              {orderData.totalPrice.toFixed(2)}
            </p>
            <p>
              <span className="font-medium">Paid on:</span>{" "}
              {formatDate(paymentInfo.paidAt)}
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Ordered Items
        </h2>
        <div className="divide-y">
          {orderItems.map((item, index) => (
            <div key={index} className="flex py-4">
              <div className="flex-shrink-0 w-16 h-16 overflow-hidden border border-gray-200 rounded-md">
                <img
                  src={item.product?.images?.[0]?.url || "/fallback.jpg"}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col flex-1 ml-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-4 mt-4 border-t">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{orderData.itemsPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>₹{orderData.shippingPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>₹{orderData.taxPrice.toFixed(2)}</span>
            </div>
            {orderData.couponDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ₹{orderData.couponDiscount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 mt-2 text-lg font-bold border-t">
              <span>Total</span>
              <span>₹{orderData.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
