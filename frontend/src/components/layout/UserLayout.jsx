import { Outlet } from "react-router-dom";
import UserSidebar from "../../pages/user/UserSidebar";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import { Menu } from "lucide-react";
import Layout from "./Layout";
import UserBreadcrumb from "../../pages/user/UserBreadcrumb";

// layout wrap user-related pages.
const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle();

  return (
    <Layout
      sidebarContent={({ toggleSidebar }) => (
        <UserSidebar toggleSidebar={toggleSidebar} />
      )}
      breadcrumbs={<UserBreadcrumb />}
      sidebarTitle="Account Menu"
      showMobileFilters={true} // Disable filter toggle since this is user navigation
    >
      <div className="p-4 md:p-6">
        <Outlet />
      </div>
    </Layout>
  );
};

export default UserLayout;
