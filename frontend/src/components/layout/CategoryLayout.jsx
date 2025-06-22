import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { useCategory } from "../../features/category/categoryHooks";
import useBreadcrumbItems from "../../hooks/useBreadcrumbItems";
import SidebarCategoryList from "../../pages/category/SidebarCategoryList";
import Layout from "./Layout";
import Breadcrumb from "../ui/BreadCrumb";
import Button from "../ui/Button";
import SelectBox from "../ui/SelectBox";
import { useState } from "react";

const CategoriesLayout = () => {
  const { categories } = useCategory();
  const [sort, setSort] = useState(null);
  console.log(sort);
  const breadcrumbItems = useBreadcrumbItems({
    lookupList: categories,
  });
  console.log("Categories:", categories);

  const controls = (
    <div className="flex items-center gap-2">
      <div className="w-full sm:w-48">
        <SelectBox
          options={
            categories?.flatMap((cat) =>
              cat.products?.map((product) => ({
                label: product?.name ?? "Unnamed Product",
                value: product?.name ?? "Unnamed Product",
              }))
            ) || []
          }
          placeholder="Sort By"
          value={sort}
          onChange={(val) => {
            console.log("Selected:", val);
            setSort(val); // full { label, value } object
          }}
        />
      </div>
    </div>
  );
  return (
    <Layout
      sidebarContent={({ toggleSidebar }) => (
        <SidebarCategoryList toggleSidebar={toggleSidebar} />
      )}
      breadcrumbs={<Breadcrumb items={breadcrumbItems} />}
      sidebarTitle="Categories"
      showMobileFilters={true}
      controls={controls}
      itemCount={categories.length}
    >
      <Outlet />
    </Layout>
  );
};

export default CategoriesLayout;
