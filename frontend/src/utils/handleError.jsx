import getErrorMessage from "./getErrorMessage";

export const handleError = (error) => {
  const message = getErrorMessage(error);
  throw new Error(message);
};

export const handleRequest = async () => {};
