import { useEffect } from "react";

import Timeline from "../../components/ui/Timeline";
import Loader from "../../components/ui/Loader";

import NoData from "../../utils/NoData";
import ErrorMessage from "../../utils/ErrorMessage";

import toastMessage from "../../constants/toastMessage";

import { useOrders } from "../../features/orders/orderHooks";
import {
  ORDER_STEP_MAP,
  ORDER_TIMELINE_STEPS,
} from "../../features/orders/orderConstants";

const OrderStatus = () => {
  const { myOrders, loading, error, getMyOrders } = useOrders();

  useEffect(() => {
    getMyOrders();
  }, []);

  const latestOrder = myOrders?.[myOrders.length - 1];

  const currentStep = latestOrder?.status
    ? ORDER_STEP_MAP[latestOrder.status] ?? 0
    : 0;

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!latestOrder) return <NoData message={toastMessage.ORDER_LOAD.EMPTY} />;

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-center">Order Status</h1>

      <Timeline
        steps={ORDER_TIMELINE_STEPS}
        currentStep={currentStep}
        orientation="horizontal"
      />

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Tracking Order: <strong>{latestOrder._id}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Payment Method: {latestOrder.paymentInfo?.paymentInstrument}
        </p>
        <p className="text-sm text-gray-500">
          Total: ₹{latestOrder.totalPrice}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
