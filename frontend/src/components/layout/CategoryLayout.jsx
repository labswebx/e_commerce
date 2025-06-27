import { Outlet, useParams } from "react-router-dom";
import { Menu } from "lucide-react";
import { useCategory } from "../../features/category/categoryHooks";
import useBreadcrumbItems from "../../hooks/useBreadcrumbItems";
import SidebarCategoryList from "../../pages/category/SidebarCategoryList";
import Layout from "./Layout";
import Breadcrumb from "../ui/BreadCrumb";
import Button from "../ui/Button";
import SelectBox from "../ui/SelectBox";
import { useEffect, useState } from "react";
import ProductFilters from "../../pages/product/list/ProductFilters";
import { useProducts } from "../../features/products/productHooks";

const CategoriesLayout = () => {
  const { categories } = useCategory();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [limit, setLimit] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [sort, setSort] = useState("");

  const { products, productsCount, loading, error } = useProducts({
    page,
    limit,
    filters,
    sort,
  });

  const sortOptions = [
    { label: "By rating", value: "rating" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "By Name", value: "name" },
  ];

  const breadcrumbItems = useBreadcrumbItems({
    lookupList: categories,
  });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...newFilters, category: id });
  };

  const controls = (
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
  );
  return (
    <Layout
      sidebarContent={({ toggleSidebar }) => (
        <ProductFilters
          filters={filters}
          onChange={handleFilterChange}
          toggleSidebar={toggleSidebar}
          initialCategory={id}
        />
      )}
      breadcrumbs={<Breadcrumb items={breadcrumbItems} />}
      sidebarTitle="Categories"
      showMobileFilters={true}
      controls={controls}
      itemCount={products.length}
    >
      <Outlet
        context={{
          filters,
          sort,
          id,
          setPage,
          page,
          limit,
          setLimit,
          isLoadMore,
          setIsLoadMore,
          products,
          productsCount,
          loading,
          error,
        }}
      />
    </Layout>
  );
};

export default CategoriesLayout;
