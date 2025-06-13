import Timeline from "../../components/ui/Timeline";
import { cartSteps } from "../../features/cart/cartConstants";
import { useCheckout } from "../../hooks/useCheckout";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";
import ShoppingCart from "./ShoppingCart";
import OrderConfirmation from "./OrderConfirmation";
import { useEffect } from "react";
const Cart = () => {
  const { step, next, back, setStepsLength } = useCheckout();

  useEffect(() => {
    setStepsLength(cartSteps.length);
  }, []);
  const stepComponents = [
    <ShoppingCart />,
    <CheckoutStep1 />,
    <CheckoutStep2 />,
    <CheckoutStep3 />,
    <OrderConfirmation />,
  ];

  return (
    <div className="w-full md:px-5">
      {/* timeline */}
      <div className="flex justify-center overflow-x-auto">
        <div className="max-w-4xl ">
          <Timeline steps={cartSteps} currentStep={step} />
        </div>
      </div>

      {/* Step */}
      <div className="mt-6">{stepComponents[step]}</div>
    </div>
  );
};

export default Cart;
