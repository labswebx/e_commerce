import { apiVersion } from "../../config/api";

export const CATEGORY_API_ENDPOINTS = {
  GET_ALL_CATEGORIES: `${apiVersion}/categories`,
  GET_DETAILS_CATEGORIES: (id) => `${apiVersion}/category/${id}`,
};
