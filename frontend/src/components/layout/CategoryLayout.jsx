import { Outlet } from "react-router-dom";

import { Menu } from "lucide-react";

import Breadcrumb from "../ui/BreadCrumb";

import { useCategory } from "../../features/category/categoryHooks";

import useSidebarToggle from "../../hooks/useSidebarToggle";
import useBreadcrumbItems from "../../hooks/useBreadcrumbItems";

import SidebarCategoryList from "../../pages/category/SidebarCategoryList";

// layout wrap category-related pages.
const CategoriesLayout = () => {
  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle(false);
  const { categories } = useCategory();
  const breadcrumbItems = useBreadcrumbItems({
    lookupList: categories,
  });

  return (
    <div className="layout-base">
      {/* Sidebar */}
      <aside
        className={`sidebar-base md:translate-x-0 ${
          !sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
        role="navigation"
      >
        <SidebarCategoryList />
      </aside>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div onClick={toggleSidebar} className="sidebar-overlay" />
      )}

      {/* Main Content */}
      <div className="main-content-area">
        {/* Mobile Topbar */}
        <header className="topbar-mobile">
          <button onClick={toggleSidebar} className="sidebar-toggle-btn">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Categories</h1>
        </header>

        {/* Breadcrumb */}
        <div className="breadcrumb-wrapper">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Page Content */}
        <main className="main-inner">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CategoriesLayout;
