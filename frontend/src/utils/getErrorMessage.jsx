const getErrorMessage = (error) => {
  const serverMessage = error?.response?.data?.message;
  return serverMessage || error.message || "Something went wrong";
};

export default getErrorMessage;
