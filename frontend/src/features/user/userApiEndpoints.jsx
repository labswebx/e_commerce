import { apiVersion } from "../../config/api";

// all user related api endpoints
const USER_API_ENDPOINTS = {
  REGISTER: `${apiVersion}/register`,
  LOGIN: `${apiVersion}/login`,
  FORGOT_PASSWORD: `${apiVersion}/password/forgot`,
  RESET_PASSWORD: (token) => `${apiVersion}/password/reset/${token}`,
  LOGOUT: `${apiVersion}/logout`,
  ME: `${apiVersion}/me`,
  PASSWORD_UPDATE: `${apiVersion}/password/update`,
  UPDATE_USER_PROFILE: `${apiVersion}/me/update`,
  DELETE_USER: `${apiVersion}/user/delete`,
};

export default USER_API_ENDPOINTS;
