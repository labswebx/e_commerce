import React from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import Icon from "./Icon";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Button = ({
  label = "",
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
  ariaLabel,
  to,
  iconColor,
  ref,
  ...props
}) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    if (disabled || loading) return;
    if (onClick) onClick(event);

    if (to) {
      if (to.startsWith("#")) {
        const el = document.querySelector(to);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (to.includes("#")) {
        const [path, hash] = to.split("#");
        navigate(path);
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        navigate(to);
      }
    }
  };

  return (
    <button
      ref={ref}
      aria-label={ariaLabel}
      onClick={handleClick}
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
              color={iconColor}
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
              color={iconColor}
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
