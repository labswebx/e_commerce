import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive
        ? "bg-gray-200 text-gray-700 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="h-full p-4 space-y-2 ">
      <div className="pb-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">My Account</h2>
      </div>
      <nav className="pt-2 space-y-2">
        <NavLink to="user/profile" className={linkClass}>
          Profile
        </NavLink>
        <NavLink to="user/orders" className={linkClass}>
          My Orders
        </NavLink>
        <NavLink to="user/settings" className={linkClass}>
          Settings
        </NavLink>
        <NavLink to="user/address" className={linkClass}>
          Address
        </NavLink>
      </nav>
    </div>
  );
};

export default UserSidebar;
