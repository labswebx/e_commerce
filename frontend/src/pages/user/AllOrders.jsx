import { useEffect, useState } from "react";
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
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/ui/Pagination";
const AllOrders = () => {
  const { myOrders, getMyOrders, loading, error, totalPages, } = useOrders();
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  useEffect(() => {
    getMyOrders(currentPage);
  }, [currentPage]);

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
            className="p-4 transition-shadow bg-gray-100 rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
              {/* Left side: Items and info */}
              <div className="flex-1">
                <h3 className="mb-1 text-sm text-gray-600 lg:font-medium lg:text-base">
                  {capitalizeFirstLetter(order.orderStatus)} •{" "}
                  {formatDate(order.createdAt)}
                </h3>

                <div className="space-y-5 ">
                  {order.orderItems.slice(0, 2).map((item) => (
                    <div key={item._id} className="flex items-center ">
                      <img
                        src={item.product?.images?.[0]?.url || "/fallback.jpg"}
                        alt={item.name}
                        className="object-cover w-12 h-12 rounded"
                      />
                      <div className="ml-3">
                        <p className="text-sm text-gray-800 line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}

                  {order.orderItems.length > 2 && (
                    <div className="flex items-center pl-2 text-sm font-medium text-gray-500">
                      +{order.orderItems.length - 2} more
                    </div>
                  )}
                </div>
              </div>

              {/* Right side: Actions */}
              <div className="flex flex-col items-stretch w-full gap-2 md:w-48">
                {order.orderStatus.toLowerCase() === "dispatched" && (
                  <button className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700">
                    Track order
                  </button>
                )}
                <Button
                  // to={`/order/${order._id}`}
                  variant="outline"
                  onClick={() => navigate(`/user/order/${order._id}`)}
                  label="View order details"
                  size="sm"
                  // className="text-gray-700 border border-black rounded "
                />
                <Button
                  // className="text-sm text-blue-600 hover:underline"
                  label="Track Order"
                  size="sm"
                ></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllOrders;
