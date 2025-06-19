import { useLocation } from "react-router-dom";
import { useCategory } from "../../features/category/categoryHooks";
import NavItem from "../../components/ui/NavItems";

const SidebarCategoryList = () => {
  const { categories } = useCategory();
  const location = useLocation();
  console.log(categories);

  return (
    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat._id}>
          <NavItem
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
      ))}
    </ul>
  );
};

export default SidebarCategoryList;
