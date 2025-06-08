import {
  CheckCircle,
  Box,
  Truck,
  Flag,
  CreditCard,
  Home,
  User,
  Camera,
  Heart,
  ShoppingCart,
} from "lucide-react";

import React from "react";

const iconMap = {
  check: <CheckCircle size={20} />,
  box: <Box size={20} />,
  truck: <Truck size={20} />,
  flag: <Flag size={20} />,
  creditcard: <CreditCard size={20} />,
  home: <Home size={20} />,
  user: <User size={20} />,
  camera: <Camera size={20} />,
  heart: <Heart size={20} />,
  cart: <ShoppingCart size={20} />,
};

export default function Timeline({
  steps = [],
  currentStep = 0,
  orientation = "horizontal",
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div className={isHorizontal ? "timeline-horizontal" : "timeline-vertical"}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            className={
              isHorizontal
                ? "timeline-step-horizontal"
                : "timeline-step-vertical"
            }
          >
            {/* Connector */}
            {!isLast && (
              <div
                className={
                  isHorizontal
                    ? "timeline-connector-horizontal"
                    : "timeline-connector-vertical"
                }
              />
            )}

            {/* Icon */}
            <div
              className={`timeline-icon ${
                isComplete || isActive ? "timeline-icon-completed" : ""
              }`}
            >
              {/* Your icon here */}
              {step.icon}
            </div>

            {/* Label */}
            <div
              className={`timeline-label ${
                isActive ? "timeline-label-active" : ""
              } ${
                isHorizontal
                  ? "timeline-label-horizontal"
                  : "timeline-label-vertical"
              }`}
            >
              <div>Step {index + 1}</div>
              <div>{step.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
