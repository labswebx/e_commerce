import { ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserSidebar = ({ toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive
        ? "bg-gray-200 text-gray-700 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  const handleLinkClick = () => {
    toggleSidebar(); // Close sidebar when a link is clicked
  };
  return (
    <div className="h-full p-4 space-y-2 ">
      <div className="flex items-center gap-2 pb-4 border-b">
        <ChevronLeft className="md:hidden" onClick={() => toggleSidebar()} />
        <h2 className="text-xl font-bold text-gray-800">My Account</h2>
      </div>
      <nav className="pt-2 space-y-2">
        <NavLink
          to="user/profile"
          className={linkClass}
          onClick={handleLinkClick}
        >
          Profile
        </NavLink>
        <NavLink
          to="user/orders"
          className={linkClass}
          onClick={handleLinkClick}
        >
          My Orders
        </NavLink>
        <NavLink
          to="user/settings"
          className={linkClass}
          onClick={handleLinkClick}
        >
          Settings
        </NavLink>
        <NavLink
          to="user/address"
          className={linkClass}
          onClick={handleLinkClick}
        >
          Address
        </NavLink>
      </nav>
    </div>
  );
};

export default UserSidebar;
