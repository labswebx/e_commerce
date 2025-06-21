import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryProducts } from "../../features/products/productHooks";
import Loader from "../../components/ui/Loader";
import { ProductCard } from "../../components/ui/Card";

const ProductsByCategory = () => {
  const { id } = useParams();
  const { categoryProducts, loading, error } = useCategoryProducts(id);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-semibold">Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
