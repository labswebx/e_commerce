import React from "react";
import { ICON_SIZE } from "../../theme";
// import { ICON_SIZE } from "../theme";

const Icon = ({
  icon: IconComponent,
  size = "md",
  fill = false,
  bgColor = "transparent",
  color = "#000",
  borderRadius = 8,
}) => {
  const dimension = ICON_SIZE[size] || ICON_SIZE.md;

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: fill ? bgColor : "transparent",
        borderRadius: fill ? borderRadius : 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: fill ? 4 : 0,
      }}
    >
      <IconComponent
        size={dimension - (fill ? 8 : 0)}
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </div>
  );
};

export default Icon;
