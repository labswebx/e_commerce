import React, { useEffect, useState } from "react";
import { useProducts } from "../../../features/products/productHooks";
import ProductGrid from "./ProductGrid";
import ProductFilters from "./ProductFilters";
import ErrorMessage from "../../../utils/ErrorMessage";
import toastMessage from "../../../constants/toastMessage";
import Button from "../../../components/ui/Button";
import ProductLayout from "../../../components/layout/ProductLayout";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [sort, setSort] = useState("rating");

  const { products, productsCount, loading } = useProducts({
    page,
    limit,
    filters,
    sort,
  });

  useEffect(() => {
    setPage(1);
    setLimit(12);
    setIsLoadMore(false);
  }, [filters]);

  const noProductsFound = !loading && products.length === 0;

  return (
    <ProductLayout filters={filters} setFilters={setFilters}>
      <section className="px-4 pt-6 pb-2 md:px-8">
        {noProductsFound ? (
          <div className="py-8 text-lg font-medium text-center text-gray-600">
            No products found with the applied filters.
          </div>
        ) : (
          <ProductGrid
            products={products}
            loading={loading && !isLoadMore}
            grid="flex flex-wrap"
          />
        )}
      </section>

      {/* Load More Button */}
      {!noProductsFound && !loading && (
        <div className="flex justify-center mt-4">
          <Button
            label="Load more"
            variant="ghost"
            onClick={() => {
              setIsLoadMore(true);
              setLimit((prev) => prev + 10);
            }}
            className="hover:bg-transparent hover:text-gray-500"
          />
        </div>
      )}

      {/* Loading state when loading more */}
      {loading && isLoadMore && (
        <div className="py-4 text-center text-gray-500 animate-pulse">
          Loading more products...
        </div>
      )}
    </ProductLayout>
  );
};

export default ProductList;
