// components/layout/BaseLayout.tsx
import { useState } from "react";
import { ListFilter } from "lucide-react";
import useSidebarToggle from "../../hooks/useSidebarToggle";
const Layout = ({
  sidebarContent,
  breadcrumbs,
  controls,
  children,
  sidebarTitle = "Filters",
  itemCount,
  showMobileFilters = true,
}) => {
  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle();

  return (
    <div className="flex w-full layout-base">
      {/* Sidebar */}
      <aside
        className={`sidebar-base max-sm:w-full md:w-[260px] md:translate-x-0 ${
          !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Sidebar"
        role="complementary"
      >
        {typeof sidebarContent === "function"
          ? sidebarContent({ toggleSidebar })
          : sidebarContent}
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
            {/* Breadcrumb */}
            {breadcrumbs && (
              <nav className="hidden w-full text-sm text-gray-500 md:inline">
                {breadcrumbs}
              </nav>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between w-full gap-3 sm:flex-wrap max-sm:pt-4">
              {/* Filters (only mobile) */}
              {showMobileFilters && (
                <button
                  onClick={toggleSidebar}
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md md:hidden sm:w-auto"
                >
                  {sidebarTitle}
                  <ListFilter className="w-4 h-4 ml-2" />
                </button>
              )}

              {itemCount !== undefined && (
                <span className="hidden text-sm text-gray-600 md:inline">
                  Selected Items: <strong>{itemCount}</strong>
                </span>
              )}

              {controls}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="p-0 main-inner">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
