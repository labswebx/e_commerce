

const Banner = ({ src, alt,  }) => {
  return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default Banner;
