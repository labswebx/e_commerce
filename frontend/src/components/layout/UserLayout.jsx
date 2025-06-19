import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../pages/user/UserSidebar";

const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Desktop and Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform bg-white border-r shadow-md transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <UserSidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black bg-opacity-40 md:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 w-full overflow-y-auto">
        {/* Topbar for Mobile */}
        <header className="flex items-center justify-between p-4 border-b md:hidden">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-2xl text-gray-600"
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Account</h1>
        </header>

        {/* Main Area */}
        <main className="min-h-screen bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
