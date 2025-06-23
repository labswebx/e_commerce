import { useState, useRef, useCallback, useEffect } from "react";
import Card from "../../../components/ui/Card";
import Loader from "../../../components/ui/Loader";

const getInitialCount = () => {
  const width = window.innerWidth;
  if (width >= 1280) return 16; // xl
  if (width >= 1024) return 12; // lg
  if (width >= 768) return 8; // md
  return 4; // sm and below
};

const ProductGrid = ({
  products = [],

  loading,
  title = "",
  grid = "grid gap-4 grid-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4",
}) => {
  const [visibleCount, setVisibleCount] = useState(getInitialCount());
  const observerRef = useRef(null);

  const lastProductRef = useCallback(
    (node) => {
      if (loading || !node) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < products.length) {
          setVisibleCount((prev) => prev + 8);
        }
      });

      observerRef.current.observe(node);
    },
    [loading, visibleCount, products.length]
  );

  return (
    <div className="space-y-4">
      {/* Grid layout */}
      <div className={grid}>
        {loading
          ? Array.from({ length: getInitialCount() }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 space-y-4 bg-white border border-gray-200 shadow-sm rounded-xl animate-pulse"
              >
                {/* Image skeleton */}
                <div className="w-full aspect-[4/3] bg-gray-300 rounded-md" />

                {/* Title skeleton */}
                <div className="w-3/4 h-4 bg-gray-200 rounded" />

                {/* Price skeleton */}
                <div className="w-1/2 h-4 bg-gray-200 rounded" />

                {/* Button skeleton */}
                <div className="w-full h-10 mt-2 bg-gray-300 rounded" />
              </div>
            ))
          : products.map((product, index) => {
              const isLast = index === products.length - 1;
              return (
                <div
                  key={product._id}
                  ref={isLast ? lastProductRef : null}
                  className="h-full"
                >
                  <Card type="product" data={product} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductGrid;
