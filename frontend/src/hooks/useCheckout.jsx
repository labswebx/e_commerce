// hooks/useCheckout.js
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  setStep,
  setTotalSteps,
  resetCheckout,
} from "../features/checkout/checkoutSlice";

export const useCheckout = () => {
  const dispatch = useDispatch();
  const { step, totalSteps } = useSelector((state) => state.checkout);

  const next = () => dispatch(nextStep());
  const back = () => dispatch(prevStep());
  const goToStep = (step) => dispatch(setStep(step));
  const setStepsLength = (count) => dispatch(setTotalSteps(count));
  const reset = () => dispatch(resetCheckout());

  return {
    step,
    totalSteps,
    next,
    back,
    goToStep,
    setStepsLength,
    reset,
  };
};
