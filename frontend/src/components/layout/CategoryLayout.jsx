import { useState, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "../ui/BreadCrumb";
import SidebarCategoryList from "../../pages/category/SidebarCategoryList";
import { Menu } from "lucide-react";
import { useCategory } from "../../features/category/categoryHooks";

const CategoriesLayout = () => {
  //  State for toggling sidebar on mobile devices
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { categories } = useCategory();

  const breadcrumbItems = useMemo(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const items = [];

    items.push({ label: "Home", href: "/" });

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const isCategoryId = pathSegments[0] === "categories" && index === 1;

      const label = isCategoryId
        ? categories.find((cat) => cat._id === segment)?.name || "Category"
        : segment.charAt(0).toUpperCase() + segment.slice(1);

      items.push({ label, href });
    });

    return items;
  }, [location.pathname, categories]);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed z-50 p-2 bg-gray-100 rounded-md shadow top-4 left-4 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-52 bg-gray-50 border-r transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:flex-shrink-0 md:block`}
      >
        <div className="p-4">
          <SidebarCategoryList />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-2 overflow-y-auto">
        <Breadcrumb items={breadcrumbItems} />
        <Outlet />
      </main>
    </div>
  );
};

export default CategoriesLayout;
