import { Outlet } from "react-router-dom";
import UserSidebar from "../../pages/user/UserSidebar";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import { Menu } from "lucide-react";

// layout wrap user-related pages.
const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle();

  return (
    <div className="layout-base">
      {/* Sidebar */}
      <aside
        className={`sidebar-base md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
        role="navigation"
      >
        <UserSidebar />
      </aside>

      {/* Mobile Overlay */}
      {!sidebarOpen && (
        <div onClick={toggleSidebar} className="sidebar-overlay" />
      )}

      {/* Main Area */}
      <div className="main-content-area">
        {/* Topbar for Mobile */}
        <header className="topbar-mobile">
          <button onClick={toggleSidebar} className="sidebar-toggle-btn">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Account</h1>
        </header>

        {/* Page Content */}
        <main className="main-inner">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
