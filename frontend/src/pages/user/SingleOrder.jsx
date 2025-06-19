import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import NoData from "../../utils/NoData";
import NavItem from "../../components/ui/NavItems";
import {
  formatDate,
  formatPrice,
  getShortOrderId,
} from "../../utils/formatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { useOrders } from "../../features/orders/orderHooks";

const SingleOrder = () => {
  const { id } = useParams();
  const { getOrderById, order, loading, error } = useOrders();

  useEffect(() => {
    getOrderById(id);
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!order?.order) return <NoData message="No order found" />;

  const orderData = order.order;
  const { shippingAddress, paymentInfo, orderItems } = orderData;
  console.log(orderItems);
  const paymentMethod = paymentInfo?.paymentInstrument || "N/A";
  const maskedCard =
    paymentInfo?.paymentInstrument?.cardNumber?.replace(
      /\d{12}(\d{4})/,
      "**** **** **** $1"
    ) || "****";

  return (
    <div className="max-w-5xl px-6 py-10 mx-auto bg-white shadow-md rounded-2xl">
      <h2 className="pb-4 mb-8 text-3xl font-semibold text-gray-800 border-b">
        Order #{getShortOrderId(orderData._id)}
      </h2>

      {/* Order Details Cards */}
      <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
        {/* Shipping */}
        <div className="p-4 shadow-sm bg-gray-50 rounded-xl">
          <h3 className="mb-2 text-sm font-bold text-gray-600 uppercase">
            Shipping Address
          </h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p className="font-semibold">{shippingAddress.label}</p>
            <p>{shippingAddress.address}</p>
            {shippingAddress.landmark && (
              <p>Landmark: {shippingAddress.landmark}</p>
            )}
            <p>
              {shippingAddress.city}, {shippingAddress.state} -{" "}
              {shippingAddress.pincode}
            </p>
            <p>{shippingAddress.country}</p>
            <p>Contact: +91 {shippingAddress.contactNumber}</p>
          </div>
        </div>

        {/* Payment */}
        <div className="p-4 shadow-sm bg-gray-50 rounded-xl">
          <h3 className="mb-2 text-sm font-bold text-gray-600 uppercase">
            Payment Method
          </h3>
          <p className="text-sm text-gray-700">
            {paymentMethod} ({maskedCard})
          </p>
        </div>

        {/* Status */}
        <div className="p-4 shadow-sm bg-gray-50 rounded-xl">
          <h3 className="mb-2 text-sm font-bold text-gray-600 uppercase">
            Order Status
          </h3>
          <p className="text-sm font-medium text-blue-600">
            {capitalizeFirstLetter(orderData.orderStatus)}
          </p>
          {orderData.createdAt && (
            <p className="mt-1 text-xs text-gray-500">
              Ordered on: {formatDate(orderData.createdAt)}
            </p>
          )}
        </div>
      </div>

      {/* Order Items Table */}
      <div className="mb-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">
          Items in this order
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden text-sm text-left border-collapse rounded-lg">
            <thead className="text-xs text-gray-600 uppercase bg-gray-100">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orderItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 text-blue-600">
                    <NavItem
                      to={`/product/${item.product._id}`}
                      className="hover:underline"
                    >
                      {item.name}
                    </NavItem>
                  </td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-center">{formatPrice(item.price)}</td>
                  <td className="p-3 text-center">
                    {formatPrice(item.quantity * item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Summary */}
      <div className="flex justify-end">
        <div className="w-full max-w-xs p-5 text-sm shadow-sm bg-gray-50 rounded-xl">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>{formatPrice(orderData.itemsPrice)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span>{formatPrice(orderData.shippingPrice)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span>{formatPrice(orderData.taxPrice)}</span>
          </div>
          {orderData.couponDiscount > 0 && (
            <div className="flex justify-between mb-2 text-green-700">
              <span>Coupon Discount</span>
              <span>- {formatPrice(orderData.couponDiscount)}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 mt-3 text-lg font-semibold text-gray-800 border-t">
            <span>Grand Total</span>
            <span>{formatPrice(orderData.totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
