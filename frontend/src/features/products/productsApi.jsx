import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import { PRODUCTS_API_ENDPOINTS } from "./productApiEndpoints";

const productsApi = {
  // Public Products
  getAllProducts: async () => {
    try {
      const res = await axiosInstance.get(PRODUCTS_API_ENDPOINTS.GET_PRODUCTS);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getTrendingProducts: async () => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_TRENDING_PRODUCTS
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getFavouriteProducts: async () => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_FAVOURITE_PRODUCTS
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getMostOrderedProducts: async () => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_MOST_ORDERED_PRODUCTS
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getSuggestedProducts: async () => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_SUGGESTED_PRODUCTS
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getProductDetails: async (id) => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_PRODUCT_DETAILS(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getCategoryProducts: async (id) => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_CATEGORY_PRODUCTS(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  // Reviews
  createReview: async (data) => {
    try {
      const res = await axiosInstance.post(
        PRODUCTS_API_ENDPOINTS.CREATE_REVIEW,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getReviews: async () => {
    try {
      const res = await axiosInstance.get(PRODUCTS_API_ENDPOINTS.GET_REVIEWS);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default productsApi;
