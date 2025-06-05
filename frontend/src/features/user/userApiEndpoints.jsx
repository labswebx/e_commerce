// all user related api endpoints
const USER_API_ENDPOINTS = {
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/password/forgot",
  RESET_PASSWORD: (token) => `/password/reset/${token}`,
  LOGOUT: "/logout",
  ME: "/me",
  PASSWORD_UPDATE: "/password/update",
  UPDATE_ME: "/me/update",
  DELETE_USER: "user/delete",
};

export default USER_API_ENDPOINTS;
