import React from "react";

const GridWrapper = ({ cols = 3, gap = 4, children }) => {
  return (
    <div className={`grid-wrapper grid-cols-${cols} gap-${gap}`}>
      {children}
    </div>
  );
};

export default GridWrapper;
