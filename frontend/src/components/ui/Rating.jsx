import React, { useState } from "react";
import { Star } from "lucide-react";
import theme from "../../theme";

const Rating = ({ rating = 0, outOf = 5, editable = false, onChange }) => {
  const [hovered, setHovered] = useState(null);
  const displayRating = hovered !== null ? hovered : rating;

  const handleClick = (index) => {
    if (!editable) return;
    onChange?.(index + 1);
  };

  const handleMouseEnter = (index) => {
    if (editable) setHovered(index + 1);
  };

  const handleMouseLeave = () => {
    if (editable) setHovered(null);
  };

  return (
    <div className="rating-wrapper">
      {[...Array(outOf)].map((_, i) => {
        const fillPercentage = displayRating - i;

        let fillColor = theme.COLORS.gray[550];
        let fill = "none";

        if (fillPercentage >= 1) {
          fillColor = theme.COLORS.warning.main;
          fill = fillColor;
        } else if (fillPercentage > 0) {
          // Partial fill using gradient
          fill = `url(#grad${i})`;
        }

        return (
          <svg
            key={i}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            className="rating-star"
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              <linearGradient id={`grad${i}`}>
                <stop
                  offset={`${fillPercentage * 100}%`}
                  stopColor={theme.COLORS.warning.main}
                />
                <stop
                  offset={`${fillPercentage * 100}%`}
                  stopColor={theme.COLORS.gray[550]}
                />
              </linearGradient>
            </defs>
            <path
              d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.778 1.402 8.183L12 18.896l-7.336 3.856 1.402-8.183L.132 9.211l8.2-1.193z"
              stroke={theme.COLORS.warning.main}
              strokeWidth="1"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
