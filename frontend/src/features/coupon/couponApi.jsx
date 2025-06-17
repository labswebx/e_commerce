import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import COUPON_API_ENPOINTS from "./couponApiEndpoints";

const couponApi = {
  validateCoupon: async ({ code, cartValue }) => {
    try {
      const res = await axiosInstance.post(
        COUPON_API_ENPOINTS.VALIDATE_COUPON,
        {
          code,
          cartValue,
        }
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default couponApi;
