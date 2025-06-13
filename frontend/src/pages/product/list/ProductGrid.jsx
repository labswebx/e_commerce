import React, { useState } from "react";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const ProductGrid = ({ products = [], loading = false, title = "" }) => {
  const [visibleCount, setVisibleCount] = useState(8); // initial product count

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="space-y-4">
      {/* {title && <h2 className="text-xl font-semibold">{title}</h2>} */}

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 p-4 bg-white border shadow rounded-xl animate-pulse"
              >
                {/* Image placeholder */}
                <div className="w-full h-40 bg-gray-200 rounded-md" />

                {/* Text placeholders */}
                <div className="w-3/4 h-4 bg-gray-200 rounded" />
                <div className="w-1/2 h-4 bg-gray-200 rounded" />

                {/* Button placeholder */}
                <div className="w-full h-8 mt-2 bg-gray-300 rounded" />
              </div>
            ))
          : visibleProducts.map((product) => (
              <Card key={product._id} type="product" data={product} />
            ))}
      </div>

      {!loading && visibleCount < products.length && (
        <div className="flex justify-center mt-4">
          <Button
            label="   Load More"
            onClick={handleLoadMore}
            variant="ghost"
            aria-label=""
          ></Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
