import React from "react";
import classNames from "classnames";
import { CheckCircle, XCircle, Loader2, Pause } from "lucide-react";

const statusColors = {
  success: "progressbar-success",
  error: "progressbar-error",
  loading: "progressbar-loading",
  paused: "progressbar-paused",
  default: "progressbar-default",
};

const ProgressBar = ({
  current = 0,
  total = 100,
  label = "",
  description = "",
  size = "md",
  status = "default",
  showPercent = true,
  showStatusIcon = true,
  errorMessage = "",
  striped = false,
  animated = false,
  color = "",
  onPause,
  onCancel,
}) => {
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  const heightClass =
    {
      sm: "progressbar-sm",
      md: "progressbar-md",
      lg: "progressbar-lg",
    }[size] || "progressbar-md";

  const statusClass = color?.trim()
    ? color
    : statusColors[status] || statusColors.default;

  const barClasses = classNames("progressbar-bar", statusClass, heightClass, {
    "progressbar-striped": striped,
    "animate-stripes": animated,
  });

  const renderIcon = () => {
    if (!showStatusIcon) return null;
    const iconProps = { className: "w-5 h-5" };
    switch (status) {
      case "success":
        return <CheckCircle {...iconProps} className="text-green-500" />;
      case "error":
        return <XCircle {...iconProps} className="text-red-500" />;
      case "loading":
        return (
          <Loader2 {...iconProps} className="text-blue-500 animate-spin" />
        );
      case "paused":
        return <Pause {...iconProps} className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="progressbar-wrapper"
      role="progressbar"
      aria-valuenow={Math.floor(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {(label || description) && (
        <div>
          {label && <div className="progressbar-label">{label}</div>}
          {description && (
            <div className="progressbar-description">{description}</div>
          )}
        </div>
      )}

      <div className="flex items-center space-x-3">
        <div className={`progressbar-bar-bg`}>
          <div className={barClasses} style={{ width: `${percent}%` }} />
        </div>
        {showPercent && (
          <div className="w-12 text-right">{Math.floor(percent)}%</div>
        )}
        {renderIcon()}
      </div>

      {errorMessage && status === "error" && (
        <div className="text-xs text-red-600">{errorMessage}</div>
      )}

      {(onPause || onCancel) && (
        <div className="flex mt-1 space-x-2">
          {onPause && (
            <button
              className="progressbar-btn progressbar-btn-pause"
              onClick={onPause}
              type="button"
            >
              Pause
            </button>
          )}
          {onCancel && (
            <button
              className="progressbar-btn progressbar-btn-cancel"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
