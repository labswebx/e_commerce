import React from "react";

const Divider = ({ text = "", orientation = "horizontal" }) => {
  if (orientation === "vertical") {
    return <div className="divider-vertical"></div>;
  }

  return (
    <div className="divider">
      <div className="flex items-center">
        <div className="divider-line"></div>
      </div>
      {text && (
        <div className="divider-content">
          <span className="divider-text">{text}</span>
        </div>
      )}
    </div>
  );
};

export default Divider;
