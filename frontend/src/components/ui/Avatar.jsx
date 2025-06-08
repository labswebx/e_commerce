import React from "react";

const Avatar = ({ src, alt, size = "md", rounded = true, status = null }) => {
  const statusClasses = {
    online: "status-online",
    offline: "status-offline",
    busy: "status-busy",
    away: "status-away",
  };

  return (
    <div className="avatar">
      <img
        src={src}
        alt={alt}
        className={`avatar-${size} ${
          rounded ? "avatar-rounded" : ""
        } avatar-img`}
      />
      {status && (
        <span className={`avatar-status ${statusClasses[status]}`}></span>
      )}
    </div>
  );
};

export default Avatar;
