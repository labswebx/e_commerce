export const capitalizeFirstLetter = (value) => {
  if (typeof value !== "string") return value;
  if (!value.trim()) return "";

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
