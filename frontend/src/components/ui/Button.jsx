import React from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import Icon from "./Icon";
import classNames from "classnames";

const Button = ({
  label = "Label",
  onClick,
  size = "md", // sm | md | lg
  variant = "filled", // filled | outline | ghost
  disabled = false,
  loading = false,
  hasDropdown = false,
  fullWidth = false,
  rounded = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = "",
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames(
        "btn",
        `btn-${size}`, // btn-sm, btn-md, btn-lg
        `btn-${variant}`, // btn-filled, btn-outline, btn-ghost
        !disabled && `btn-${variant}-hover`, // hover styles
        disabled && `btn-${variant}-disabled`, // disabled styles
        fullWidth && "btn-full",
        rounded && "btn-rounded",
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        <>
          {IconLeft && (
            <Icon
              icon={IconLeft}
              size={size}
              className={classNames(disabled && "opacity-50")}
            />
          )}
          {label}
          {hasDropdown && (
            <ChevronDown
              size={16}
              className={classNames(disabled && "opacity-50")}
            />
          )}
          {IconRight && (
            <Icon
              icon={IconRight}
              size={size}
              className={classNames(disabled && "opacity-50")}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
