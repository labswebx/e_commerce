import { apiVersion } from "../../config/api";

const SUBCATEGORY_API_ENDPOINTS = {
  GET_BY_CATEGORY: (categoryId) => `${apiVersion}/subcategories/${categoryId}`,
  GET_ALL: `${apiVersion}/admin/subcategories`,
};
export default SUBCATEGORY_API_ENDPOINTS;
