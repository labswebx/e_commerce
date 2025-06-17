import { useState } from "react";

export const ProductImageSection = ({ images = [], name = "Product" }) => {
  const getImageSrc = (img) => img?.url || img?.base64 || img?.src || "";
  const [selectedImage, setSelectedImage] = useState(getImageSrc(images[0]));

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={selectedImage}
          alt={name}
          className="object-contain w-full border rounded-lg h-72"
        />
      </div>

      {/* Thumbnail Carousel */}
      <div className="flex gap-2 px-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {images.map((img, index) => {
          const src = getImageSrc(img);
          return (
            <img
              key={index}
              src={src}
              alt={`${name}-${index}`}
              onClick={() => setSelectedImage(src)}
              className={`min-w-[4rem] h-16 object-contain border rounded-md cursor-pointer transition-all duration-200 ${
                selectedImage === src ? "ring-2 ring-blue-500" : "opacity-60"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
