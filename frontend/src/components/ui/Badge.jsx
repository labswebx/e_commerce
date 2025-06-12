import React from "react";
import classNames from "classnames";

const Badge = ({
  variant = "default",
  size = "md",
  children,
  className = "",
  position = "top-right", // e.g., top-right, bottom-left
}) => {
  return (
    <span
      className={classNames(
        "badge",
        `badge-${size}`,
        `badge-${variant}`,
        `badge-${position}`,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
