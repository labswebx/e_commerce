// components/sections/Section.jsx
export const Section = ({
  title,
  subtitle,
  buttonText,
  image,
  reverse = false,
  dark = false,
  backgroundColor = "#fff",
}) => {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-8 py-8 px-4 sm:px-1 lg:px-1 transition duration-300 ease-in-out ${
        reverse ? "lg:flex-row-reverse" : ""
      } ${dark ? "text-white" : "text-black"}`}
      style={{ backgroundColor }}
    >
      <div className="flex-1 flex justify-center items-center min-h-[200px]">
        {image ? (
          <>
            <img
              src={image.small || image}
              alt={title}
              className="max-w-[300px] w-full object-contain block lg:hidden"
            />
            <img
              src={image.large || image}
              alt={title}
              className="max-w-[400px] w-full object-contain hidden lg:block"
            />
          </>
        ) : (
          <span className="text-sm text-gray-600">Image Not Available</span>
        )}
      </div>
      <div className="flex-1 space-y-4 text-center lg:text-left">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {subtitle && <p className="text-lg opacity-70">{subtitle}</p>}
        {buttonText && <Button label={buttonText} variant="outline" />}
      </div>
    </section>
  );
};
