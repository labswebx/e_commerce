import React, { useState } from "react";
import Icon from "./Icon";
import { Eye, EyeOff } from "lucide-react";

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
  name,
  size,
  iconsize = "sm",
  iconColor = "#989898",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || `input-${label?.replace(/\s+/g, "-").toLowerCase()}`;

  const getInputClass = () => {
    if (type === "radio") return "input-radio";
    if (type === "checkbox") return "input-checkbox";
    return "input-text";
  };

  const isPasswordField = type === "password";
  // #989898"
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

      <div className="relative input-wrapper">
        {showIcon && icon && (
          <div className="absolute transform -translate-y-1/2 left-3 top-1/2">
            <Icon icon={icon} size={iconsize} color={iconColor} />
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          disabled={disabled}
          className={`${getInputClass()} ${className} ${
            showIcon ? "pl-10" : ""
          } ${isPasswordField ? "pr-10" : ""}   ${size ? `size-${size}` : ""}`}
          {...props}
        />

        {/* Toggle password visibility */}
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
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

      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
