import React from "react";
import classNames from "classnames";

const GridWrapper = ({
  children,
  className = "",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  gap = "gap-4",
  align = "items-start", 
  justify = "justify-start", 
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(
        "grid-wrapper",
        columns,
        gap,
        align,
        justify,
        {
          "w-full": fullWidth,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
