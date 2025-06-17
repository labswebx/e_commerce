import { useEffect } from "react";
import NavItem from "../../components/ui/NavItems";
import NoData from "../../utils/NoData";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import { format } from "date-fns";
import { useOrders } from "../../features/orders/orderHooks";
import toastMessage from "../../constants/toastMessage";
import { getOrderStatusClass } from "../../features/orders/orderConstants";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import {
  formatDate,
  formatPrice,
  getShortOrderId,
} from "../../utils/formatter";
const AllOrders = () => {
  const { myOrders, getMyOrders, loading, error } = useOrders();

  useEffect(() => {
    getMyOrders();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!myOrders || myOrders.length === 0)
    return <NoData message={toastMessage.ORDER_LOAD.EMPTY} />;

  return (
    <div className="flex flex-col items-center max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Order History
      </h2>

      <div className="max-w-2xl space-y-6">
        {myOrders.map((order) => (
          <div
            key={order._id}
            className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">
                  Order #{getShortOrderId(order._id)}
                </h3>
                <p className="text-sm text-gray-500">
                  Placed on {formatDate(order.createdAt)}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getOrderStatusClass(
                    order.orderStatus
                  )}`}
                >
                  {capitalizeFirstLetter(order.orderStatus)}
                </span>
                <p className="mt-2 text-xl font-bold text-gray-900">
                  {formatPrice(order.totalPrice)}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-700">
                {order.orderItems.length}{" "}
                {order.orderItems.length > 1 ? "Items" : "Item"}
              </h4>

              <div className="grid grid-cols-2 gap-4 mt-3 sm:grid-cols-3 md:grid-cols-4">
                {order.orderItems.slice(0, 4).map((item) => {
                  return (
                    <div key={item._id} className="flex items-center">
                      <img
                        loading="lazy"
                        src={
                          item.product?.images?.[0]?.public_id ||
                          "/fallback.jpg"
                        }
                        alt={item.name}
                        className="object-cover w-16 h-16 rounded"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800 line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {order.orderItems.length > 4 && (
                  <div className="flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-sm font-medium text-gray-500">
                      +{order.orderItems.length - 4} more
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <NavItem to={`/order/${order._id}`} label="View Order Details" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
