// components/layout/ProductLayout.tsx
import { useEffect, useState } from "react";
import { useProducts } from "../../features/products/productHooks";
import ProductFilters from "../../pages/product/list/ProductFilters";
import SelectBox from "../ui/SelectBox";
import Layout from "./Layout";

const ProductLayout = ({ children }) => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [sort, setSort] = useState("");

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
  }, [filters, sort, limit, page]);

  const sortOptions = [
    { label: "By rating", value: "rating" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "By Name", value: "name" },
  ];

  return (
    <Layout
      sidebarContent={({ toggleSidebar }) => (
        <ProductFilters
          toggleSidebar={toggleSidebar}
          filters={filters}
          onChange={setFilters}
        />
      )}
      breadcrumbs={
        <>
          Home &gt; Catalog &gt;{" "}
          <span className="font-medium text-gray-700">Smartphones</span>
        </>
      }
      itemCount={productsCount}
      controls={
        <div className="w-full sm:w-48">
          <SelectBox
            options={sortOptions}
            placeholder="Sort By"
            value={sort}
            onChange={(val) => {
              setSort(val);
              setPage(1);
              setLimit(12);
              setIsLoadMore(false);
            }}
          />
        </div>
      }
    >
      {children}
    </Layout>
  );
};

export default ProductLayout;
