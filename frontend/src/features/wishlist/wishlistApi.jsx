import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import { WISHLIST_API_ENDPOINTS } from "./wishlistApiEndpoints";

const wishlistApi = {
  // Collections
  createCollection: async (data) => {
    try {
      const res = await axiosInstance.post(
        WISHLIST_API_ENDPOINTS.CREATE_COLLECTION,
        data
      );

      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getCollections: async () => {
    try {
      const res = await axiosInstance.get(
        WISHLIST_API_ENDPOINTS.GET_COLLECTIONS
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getCollection: async (id) => {
    try {
      const res = await axiosInstance.get(
        WISHLIST_API_ENDPOINTS.GET_COLLECTION(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  updateCollection: async (id, data) => {
    try {
      const res = await axiosInstance.put(
        WISHLIST_API_ENDPOINTS.UPDATE_COLLECTION(id),
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  deleteCollection: async (id) => {
    try {
      const res = await axiosInstance.delete(
        WISHLIST_API_ENDPOINTS.DELETE_COLLECTION(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  // Products
  addToCollection: async (collectionId, productId) => {
    try {
      const res = await axiosInstance.post(
        WISHLIST_API_ENDPOINTS.ADD_TO_COLLECTION(collectionId),
        { productId }
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  removeFromCollection: async (collectionId, productId) => {
    try {
      const res = await axiosInstance.delete(
        WISHLIST_API_ENDPOINTS.REMOVE_FROM_COLLECTION(collectionId, productId)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  moveProduct: async (data) => {
    try {
      const res = await axiosInstance.post(
        WISHLIST_API_ENDPOINTS.MOVE_PRODUCT,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  // Sharing
  shareCollection: async (collectionId) => {
    try {
      const res = await axiosInstance.post(
        WISHLIST_API_ENDPOINTS.SHARE_COLLECTION(collectionId)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getSharedCollection: async (token) => {
    try {
      const res = await axiosInstance.get(
        WISHLIST_API_ENDPOINTS.GET_SHARED_COLLECTION(token)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default wishlistApi;
