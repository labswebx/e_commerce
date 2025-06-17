import React, { useEffect, useState } from "react";

const DescriptionWithToggle = ({ description = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(250);

  // Detect screen width without react-responsive
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 768;
      setIsMobile(isSmall);
      setLimit(isSmall ? 100 : 250);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const needsToggle = description.length > limit;
  const displayText =
    expanded || !needsToggle
      ? description
      : description.slice(0, limit) + "...";
  return (
    <div>
      <p className="mb-2 text-sm text-gray-700">{displayText}</p>
      {needsToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-gray-700 hover:underline"
        >
          {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
};

export default DescriptionWithToggle;
