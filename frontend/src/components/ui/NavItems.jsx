import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import classNames from "classnames";

const NavItem = ({
  to,
  label,
  children,
  className = "",
  href,
  onClick,
  disabled,
  link,
}) => {
  const location = useLocation();

  if (to) {
    return (
      <NavLink
        onClick={disabled ? undefined : onClick}
        to={to}
        className={({ isActive }) =>
          classNames(
            "nav-item",
            {
              active: isActive && !disabled,
              inactive: !isActive && !disabled,
              disabled: disabled,
            },
            className
          )
        }
        aria-disabled={disabled}
      >
        {children || label}
      </NavLink>
    );
  }

  if (link) {
    return (
      <Link
        to={link}
        onClick={disabled ? undefined : onClick}
        className={classNames(
          "nav-item text-black",
          {
            disabled: disabled,
          },
          className
        )}
        aria-disabled={disabled}
      >
        {children || label}
      </Link>
    );
  }

  if (href) {
    const isActive = location.pathname === href;

    return (
      <a
        onClick={disabled ? undefined : onClick}
        href={href}
        className={classNames(
          "nav-item",
          {
            active: isActive && !disabled,
            inactive: !isActive && !disabled,
            disabled: disabled,
          },
          className
        )}
        aria-disabled={disabled}
      >
        {children || label}
      </a>
    );
  }

  return (
    <span
      onClick={disabled ? undefined : onClick}
      className={classNames("nav-item", "disabled", className)}
      aria-disabled="true"
    >
      {children || label}
    </span>
  );
};

export default NavItem;
