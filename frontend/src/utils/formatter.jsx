// Format Indian currency
export const formatPrice = (value) => {
  const number = Number(value);
  if (isNaN(number)) return "₹0";
  return `₹${number.toLocaleString("en-IN")}`;
};

// Format date
export const formatDate = (date, pattern = "MMMM d, yyyy") => {
  try {
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

// Get short version of order ID
export const getShortOrderId = (id) =>
  typeof id === "string" ? id.substring(0, 8).toUpperCase() : id;
