import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import { CATEGORY_API_ENDPOINTS } from "./categoryApiEndpoints";

const categoryApi = {
  getAllCategories: async () => {
    try {
      const res = await axiosInstance.get(CATEGORY_API_ENDPOINTS.GET_ALL);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getCategoryDetails: async (id) => {
    try {
      const res = await axiosInstance.get(
        CATEGORY_API_ENDPOINTS.GET_DETAILS(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default categoryApi;
