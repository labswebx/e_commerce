import { apiVersion } from "../../config/api";

const ADDRESS_API_ENDPOINTS = {
  CREATE_ADDRESS: `${apiVersion}/address/new`,
  UPDATE_ADDRESS: (id) => `${apiVersion}/address/${id}`,
  DELETE_ADDRESS: (id) => `${apiVersion}/address/${id}`,
  GET_MY_ADDRESSES: `${apiVersion}/address/me`,
  GET_ADDRESS_DETAILS: (id) => `${apiVersion}/address/${id}`,
};

export default ADDRESS_API_ENDPOINTS;
