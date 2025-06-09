//  organize all file in single page
import React, { useState } from "react";
import Timeline from "../../components/ui/Timeline";
import { Box, Truck, CreditCard, CheckCircle } from "lucide-react";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep2 from "./CheckoutStep2";
import CheckoutStep3 from "./CheckoutStep3";

const Cart = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { label: "Address", icon: <Box size={20} /> },
    { label: "Shipping", icon: <Truck size={20} /> },
    { label: "Payment", icon: <CreditCard size={20} /> },
    { label: "Confirmation", icon: <CheckCircle size={20} /> },
  ];

  return (
    <div className="w-full md:px-40">
      <Timeline steps={steps} currentStep={currentStep} />
      <CheckoutStep1 />
      <CheckoutStep2 />
      <CheckoutStep3 />
    </div>
  );
};

export default Cart;
