import { useState, useRef, useCallback } from "react";
import Card from "../../../components/ui/Card";
import Loader from "../../../components/ui/Loader";

const ProductGrid = ({ products = [], loading, title = "" }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const observerRef = useRef(null);

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < products.length) {
          setVisibleCount((prev) => prev + 8);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, visibleCount, products.length]
  );

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 p-4 bg-white border shadow rounded-xl animate-pulse"
              >
                <div className="w-full h-40 bg-gray-200 rounded-md" />
                <div className="w-3/4 h-4 bg-gray-200 rounded" />
                <div className="w-1/2 h-4 bg-gray-200 rounded" />
                <div className="w-full h-8 mt-2 bg-gray-300 rounded" />
              </div>
            ))
          : visibleProducts.map((product, index) => {
              if (index === visibleProducts.length - 1) {
                return (
                  <div ref={lastProductRef} key={product._id}>
                    <Card type="product" data={product} />
                  </div>
                );
              }
              return <Card key={product._id} type="product" data={product} />;
            })}
      </div>

      {!loading && visibleCount < products.length && (
        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-500 animate-pulse">
            <Loader small />
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
