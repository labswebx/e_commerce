import React from "react";

const Loader = ({ small = false }) => {
  return (
    <div
      className={`loader-container ${
        small ? "loader-container--small" : "loader-container--large"
      }`}
    >
      <div
        className={`loader-spinner ${
          small ? "loader-spinner--small" : "loader-spinner--large"
        }`}
      />
    </div>
  );
};

export default Loader;
