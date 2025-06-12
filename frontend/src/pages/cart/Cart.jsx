//  organize all file in single page
import React, { useEffect, useState } from "react";
import Timeline from "../../components/ui/Timeline";
import { Box, Truck, CreditCard, CheckCircle } from "lucide-react";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";
import ShoppingCart from "./ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../features/orders/orderSlice";
const Cart = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [orderData, setOrder] = useState({});
  const [orderId, setOrderId] = useState(null);
  const { cart } = useSelector((state) => state.cart);
  const steps = [
    { label: "Cart", icon: <Box size={20} /> },
    { label: "Address", icon: <Box size={20} /> },
    { label: "Shipping", icon: <Truck size={20} /> },
    { label: "Payment", icon: <CreditCard size={20} /> },
    { label: "Confirmation", icon: <CheckCircle size={20} /> },
  ];
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const {
    order,
    loading: orderLoading,
    error: orderError,
  } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(createOrder());
  // });
  return (
    <div className="w-full md:px-40">
      <Timeline steps={steps} currentStep={currentStep} />
      <div className="mt-6">
        {currentStep === 0 && (
          <ShoppingCart handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 1 && (
          <CheckoutStep1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 2 && (
          <CheckoutStep2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {currentStep === 3 && (
          <CheckoutStep3 handleNext={handleNext} handleBack={handleBack} />
        )}
      </div>
    </div>
  );
};

export default Cart;
