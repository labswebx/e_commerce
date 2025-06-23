import React from "react";
import { getInitials } from "../../utils/getInitials";

const Avatar = ({
  src,
  alt,
  name = "",
  size = "lg",
  rounded = true,
  status = null,
}) => {
  // Improved color generation with better contrast
  const getAvatarColors = (initials) => {
    // Consistent hash function
    const hash = initials.split("").reduce((hash, char) => {
      return char.charCodeAt(0) + ((hash << 5) - hash);
    }, 0);

    // Generate hue (0-360) from hash
    const hue = Math.abs(hash) % 360;

    // Fixed saturation and lightness for vibrant colors
    const saturation = 70 + Math.abs(hash % 15); // 70-85%
    const lightness = 50 + Math.abs(hash % 10); // 50-60%

    // HSL color for background
    const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // Determine text color based on brightness (better contrast)
    const brightness = (hue * 299 + saturation * 587 + lightness * 114) / 1000;
    const textColor = brightness > 128 ? "#333333" : "#ffffff";

    return { bgColor, textColor };
  };

  const initials = getInitials(name || alt);
  const { bgColor, textColor } = getAvatarColors(initials);

  // Size classes mapping to Tailwind classes
  const sizeClasses = {
    xs: "w-6 h-6 text-xs", // Extra small
    sm: "w-8 h-8 text-sm", // Small (default)
    md: "w-10 h-10 text-base", // Medium
    lg: "w-20 h-20 text-[40px]", // Large
    xl: "w-16 h-16 text-xl", // Extra large
  };

  return (
    <div className="avatar">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} ${
            rounded ? "avatar-rounded" : ""
          } avatar-img`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} ${
            rounded ? "avatar-rounded" : ""
          } flex items-center justify-center font-bold`}
          style={{
            backgroundColor: bgColor,
            color: textColor,
            userSelect: "none",
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
};

export default Avatar;
