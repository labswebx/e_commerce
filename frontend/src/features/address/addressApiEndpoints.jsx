const ADDRESS_API_ENDPOINTS = {
  CREATE_ADDRESS: "/address/new",
  UPDATE_ADDRESS: (id) => `/address/${id}`,
  DELETE_ADDRESS: (id) => `/address/${id}`,
  GET_MY_ADDRESSES: "/address/me",
  GET_ADDRESS_DETAILS: (id) => `/address/${id}`,
};

export default ADDRESS_API_ENDPOINTS;
