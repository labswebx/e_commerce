import axiosInstance from "../../config/api";
import { handleError } from "../../utils/handleError";
import CONTACT_API_ENDPOINTS from "./contactApiEndpoints";

const contactApi = {
  sendContactMessage: async (data) => {
    try {
      const res = await axiosInstance.post(CONTACT_API_ENDPOINTS.SEND, data);
      return res.data;
    } catch (err) {
      handleError(err);
    }
  },
};

export default contactApi;
