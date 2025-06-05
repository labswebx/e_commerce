import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import ADDRESS_API_ENDPOINTS from "./addressApiEndpoints";

const addressApi = {
  createAddress: async (data) => {
    try {
      const res = await axiosInstance.post(
        ADDRESS_API_ENDPOINTS.CREATE_ADDRESS,
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  updateAddress: async (id, data) => {
    try {
      const res = await axiosInstance.put(
        ADDRESS_API_ENDPOINTS.UPDATE_ADDRESS(id),
        data
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  deleteAddress: async (id) => {
    try {
      const res = await axiosInstance.delete(
        ADDRESS_API_ENDPOINTS.DELETE_ADDRESS(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getMyAddresses: async () => {
    try {
      const res = await axiosInstance.get(
        ADDRESS_API_ENDPOINTS.GET_MY_ADDRESSES
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },

  getAddressDetails: async (id) => {
    try {
      const res = await axiosInstance.get(
        ADDRESS_API_ENDPOINTS.GET_ADDRESS_DETAILS(id)
      );
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default addressApi;
