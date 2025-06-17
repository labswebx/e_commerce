import OrderSummaryCard from "./OrderSummaryCard";
import PaymentTabs from "./PaymentTabs";
import { useCheckout } from "../../hooks/useCheckout";

const CheckoutStep3 = () => {
  const { next, back } = useCheckout();
  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
        <OrderSummaryCard />
        <PaymentTabs handleBack={back} handleNext={next} />
      </div>
    </div>
  );
};

export default CheckoutStep3;
