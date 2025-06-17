import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import CONSTANTS_API_ENDPOINTS from "./constansApiEndpoints";

const constantsApi = {
  createConstant: async (data) => {
    try {
      const res = await axiosInstance.post(
        CONSTANTS_API_ENDPOINTS.CREATE,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  updateBanners: async (data) => {
    try {
      const res = await axiosInstance.post(
        CONSTANTS_API_ENDPOINTS.UPDATE_BANNERS,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getAllBanners: async () => {
    try {
      const res = await axiosInstance.get(
        CONSTANTS_API_ENDPOINTS.GET_ALL_BANNERS
      );

      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getStats: async () => {
    try {
      const res = await axiosInstance.get(CONSTANTS_API_ENDPOINTS.GET_STATS);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default constantsApi;
