import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCategory } from "../../features/category/categoryHooks";
import NavItem from "../../components/ui/NavItems";
import { FiX, FiSearch } from "react-icons/fi";

// display category list in sidebar
const SidebarCategoryList = ({ toggleSidebar, title = "Categories" }) => {
  const { categories } = useCategory();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    if (toggleSidebar && window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header with title and close button */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>
        {toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 md:hidden"
            aria-label="Close sidebar"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search input */}
      <div className="p-4 border-b">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category list */}
      <div className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <li key={cat._id}>
                <NavItem
                  onClick={handleClick}
                  to={`/categories/${cat._id}`}
                  className={`block p-2 rounded hover:bg-gray-100 ${
                    location.pathname.includes(cat._id)
                      ? "bg-gray-100 font-medium"
                      : ""
                  }`}
                >
                  {cat.name}
                </NavItem>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No categories found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategoryList;
