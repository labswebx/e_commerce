import React from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={`absolute z-50 px-2 py-1 text-xs text-zinc-200 scrollbar-thin-black  bg-[#2e2e2e] rounded shadow-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
          ${positionClasses[position]}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
