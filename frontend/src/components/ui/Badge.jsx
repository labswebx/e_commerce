import React from "react";

const Badge = ({ variant = "default", size = "md", children }) => {
  return (
    <span className={`badge badge-${size} badge-${variant}`}>{children}</span>
  );
};

export default Badge;
