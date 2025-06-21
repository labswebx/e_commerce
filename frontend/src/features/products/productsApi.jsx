import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import { PRODUCTS_API_ENDPOINTS } from "./productApiEndpoints";

const productsApi = {
  // Public Products
  getAllProducts: async (page = 1, limit, filters = {}, sort) => {
    try {
      const params = {
        page,
        limit,
      };
      if (sort) {
        params.sort = sort;
      }
      if (filters.search) {
        params.search = filters.search;
      }

      if (filters.brands?.length) {
        params.brands = filters.brands.join(",");
      }
      if (filters.memories?.length) {
        params.memories = filters.memories.join(",");
      }
      if (filters.price?.min !== undefined) {
        params.min = filters.price.min;
      }

      if (filters.price?.max !== undefined) {
        params.max = filters.price.max;
      }
      const res = await axiosInstance.get(PRODUCTS_API_ENDPOINTS.GET_PRODUCTS, {
        params,
      });

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
      const res = await axiosInstance.put(
        PRODUCTS_API_ENDPOINTS.CREATE_REVIEW,
        data
      );

      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getReviews: async ({ id }) => {
    try {
      const res = await axiosInstance.get(
        PRODUCTS_API_ENDPOINTS.GET_REVIEWS(id)
      );

      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default productsApi;
