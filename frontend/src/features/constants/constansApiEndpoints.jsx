import { apiVersion } from "../../config/api";

const CONSTANTS_API_ENDPOINTS = {
  CREATE: `${apiVersion}/constants/new`,
  UPDATE_BANNERS: `${apiVersion}/constants/update/banners`,
  GET_ALL_BANNERS: `${apiVersion}/constants/banners`,
  GET_STATS: `${apiVersion}/constants/stats`,
};

export default CONSTANTS_API_ENDPOINTS;
