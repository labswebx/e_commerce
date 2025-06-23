// utils/getInitials.js
export const getInitials = (name = "") => {
  if (!name.trim()) return "👤";

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
