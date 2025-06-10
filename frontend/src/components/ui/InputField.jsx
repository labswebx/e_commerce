import React from "react";
import Icon from "./Icon";

const InputField = ({
  id,
  label,
  placeholder = "Enter text",
  value,
  onChange,
  type = "text",
  icon,
  search = true,
  showIcon = false,
  buttonLabel,
  onButtonClick,
  autoFocus = false,
  disabled = false,
  error = "",
  className = "",
  ...props
}) => {
  const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

  const getInputClass = () => {
    if (type === "radio") return "input-radio";
    if (type === "checkbox") return "input-checkbox";
    return "input-text";
  };

  return (
    <div
      className={`${
        type === "radio" || type === "checkbox"
          ? "flex items-center gap-3"
          : "w-full space-y-1 md:space-y-2"
      }`}
    >
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}

      <div className="input-wrapper">
        {showIcon && icon && (
          <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
            <Icon icon={icon} size="sm" color="#989898" />
          </div>
        )}

        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          disabled={disabled}
          className={`${getInputClass()} ${className} ${
            showIcon ? "pl-10" : ""
          }`}
          {...props}
        />

        {buttonLabel && (
          <button
            type="button"
            onClick={onButtonClick}
            disabled={disabled}
            className="input-button"
          >
            {buttonLabel}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
