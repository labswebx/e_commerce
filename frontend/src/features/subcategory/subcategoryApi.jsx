import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import SUBCATEGORY_API_ENDPOINTS from "./subcategoryApiEndpoints";

const subcategoryApi = {
  getSubcategoriesOfCategory: async (categoryId) => {
    try {
      const res = await axiosInstance.get(
        SUBCATEGORY_API_ENDPOINTS.GET_ALL(categoryId)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
  getAllSubcategories: async () => {
    try {
      const res = await axiosInstance.get(
        SUBCATEGORY_API_ENDPOINTS.GET_BY_CATEGORY()
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default subcategoryApi;
