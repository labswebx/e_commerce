import classNames from "classnames";

const Logo = ({
  image,
  text,
  to = "/",
  size = "md",
  textPosition = "right", // right, left, top, bottom
  className = "",
}) => {
  const sizeClass = {
    sm: "logo-size-sm",
    md: "logo-size-md",
    lg: "logo-size-lg",
  }[size];

  const directionClass =
    textPosition === "top" || textPosition === "bottom"
      ? "logo-col"
      : "logo-row";

  const orderClass =
    textPosition === "left" || textPosition === "top"
      ? "logo-text-order-first"
      : "logo-text-order-last";

  return (
    <a
      href={to}
      className={classNames("logo-base", sizeClass, directionClass, className)}
    >
      {image && (
        <img
          src={image}
          alt="logo"
          className={classNames("logo-image", sizeClass)}
        />
      )}
      {text && (
        <span className={classNames("logo-text", orderClass)}>{text}</span>
      )}
    </a>
  );
};

export default Logo;
