import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import { useProducts } from "../../features/products/productHooks";
import ProductFilters from "../../pages/product/list/ProductFilters";
import SelectBox from "../ui/SelectBox";

const ProductLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle(false);
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
    <div className="flex w-full layout-base">
      {/* Sidebar */}
      <aside
        className={`sidebar-base   max-sm:w-full md:w-[260px]  md:translate-x-0 ${
          !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Product Sidebar"
        role="complementary"
      >
        <ProductFilters
          toggleSidebar={toggleSidebar}
          filters={filters}
          onChange={setFilters}
        />
      </aside>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="sidebar-overlay"
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="main-content-area max-w-7xl">
        <section className="w-full px-4 pt-4 pb-2 border-b md:px-8">
          <div className="flex flex-col gap-3">
            {/* Breadcrumb: */}
            <nav className="hidden w-full text-sm text-gray-500 md:inline">
              Home &gt; Catalog &gt;{" "}
              <span className="font-medium text-gray-700">Smartphones</span>
            </nav>

            {/* Controls: */}
            <div className="flex items-center justify-between w-full gap-3 sm:flex-wrap max-sm:pt-4">
              {/* Filters (only mobile) */}
              <button
                onClick={toggleSidebar}
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md md:hidden sm:w-auto"
              >
                Filters
                <ListFilter className="w-4 h-4 ml-2" />
              </button>
              <span className="hidden text-sm text-gray-600 md:inline">
                Selected Products: <strong>{productsCount}</strong>
              </span>

              {/* Sort Dropdown */}
              <div className="w-full sm:w-48 ">
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
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="p-0 main-inner">{children}</main>
      </div>
    </div>
  );
};

export default ProductLayout;
