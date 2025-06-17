import React from 'react'

const RelatedProducts = ({ relatedProducts }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">Related Products</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="relative p-4 transition bg-white border rounded-lg shadow-sm hover:shadow-md"
          >
            {/* Wishlist Icon */}
            <button className="absolute text-gray-400 top-3 right-3 hover:text-red-500">
              <Heart size={18} />
            </button>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-32 mb-4"
            />

            {/* Name */}
            <h3 className="text-sm font-medium text-center text-gray-800">
              {product.name}
            </h3>

            {/* Price */}
            <p className="mt-2 text-lg font-semibold text-center text-black">
              ${product.price}
            </p>

            {/* Button */}
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts