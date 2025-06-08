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
  className = "",
  ...props
}) => {
  const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="w-full space-y-1 md:space-y-2">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}

      <div className="input-wrapper">
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          disabled={disabled}
          className={` ${className} ${
            type === "radio"
              ? "input-radio"
              : type === "checkbox"
              ? "input-checkbox"
              : "input-text"
          }`}
          {...props}
        />

        {showIcon && Icon && (
          <div className="absolute right-4">
            <Icon icon={icon} size="sm" color="#989898" />
          </div>
        )}

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
    </div>
  );
};

export default InputField;
