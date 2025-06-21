import React, { useEffect, useRef, useState } from "react";
import Logo from "../../components/ui/Logo";
import InputField from "../../components/ui/InputField";
import Icon from "../../components/ui/Icon";
import {
  Heart,
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  LogOutIcon,
  LogIn,
} from "lucide-react";
import NavItem from "../../components/ui/NavItems";
import { logout } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "../../components/ui/Badge";
import { useSearchProducts } from "../../features/products/productHooks";
import truncate from "../../utils/truncate";
import Tooltip from "../../components/ui/Tooltip";

const TopHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);

  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef();
  const { products, search, loading } = useSearchProducts();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 1) {
        search(query);
        setShowResults(true);
      } else {
        setShowResults(false);
      }
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleAuthClick = () => {
    isAuthenticated ? handleLogout() : navigate("/login");
  };

  return (
    <div className="z-50 w-full px-4 bg-white shadow-sm sm:px-6 lg:px-10">
      <div className="flex items-center justify-between gap-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo
            image="/logo-icon.jpg"
            text="cyber"
            size="lg"
            textPosition="right"
          />
        </div>

        {/* Search - Hidden on small screens */}
        <div
          className="relative flex-1 hidden max-w-md md:flex"
          ref={searchRef}
        >
          <InputField
            placeholder="Search for products"
            icon={Search}
            showIcon
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {showResults && loading && (
            <div className="absolute w-full p-4 text-sm text-gray-500 bg-white rounded shadow-lg top-11">
              Loading...
            </div>
          )}
          {showResults && products?.length > 0 && (
            <div className="absolute z-50 w-full mt-2 overflow-y-auto bg-white rounded shadow-lg top-11 max-h-80">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <img
                    src={product.images[0]?.url || "/logo-icon.jpg"}
                    alt={product.name}
                    className="object-cover w-12 h-12 border border-gray-200 rounded"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                  <div className="w-full ml-3">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {truncate(product.name)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {showResults && !loading && products?.length === 0 && (
            <div className="absolute w-full p-4 text-sm text-gray-500 bg-white rounded shadow-lg top-11">
              No products found
            </div>
          )}
        </div>

        {/* Nav Links - Hidden on small screens */}
        <nav className="items-center hidden gap-4 text-sm font-medium md:flex">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        {/* Icons - Hidden on small screens */}
        <div className="items-center flex-shrink-0 hidden gap-4 md:flex">
          <Tooltip text="Wishlist" position="bottom">
            <Icon
              icon={Heart}
              variant="ghost"
              onClick={() => navigate("/wishlist")}
            />
          </Tooltip>
          <div className="relative w-fit">
            <Tooltip text="Add to cart" position="bottom">
              <Icon icon={ShoppingCart} onClick={() => navigate("/cart")} />
              {items.length > 0 && (
                <Badge
                  variant="danger"
                  position="top-right"
                  className="!absolute -top-1 -right-1"
                >
                  {items.length}
                </Badge>
              )}
            </Tooltip>
          </div>
          <Tooltip
            text={isAuthenticated ? "Logout" : "Login"}
            position="bottom"
          >
            <Icon
              icon={isAuthenticated ? LogOutIcon : LogIn}
              variant="ghost"
              onClick={handleAuthClick}
            />
          </Tooltip>
          {isAuthenticated && (
            <Tooltip text="Profile" position="bottom">
              <Icon
                icon={User}
                variant="ghost"
                onClick={() => navigate("/user/profile")}
              />
            </Tooltip>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon icon={mobileMenuOpen ? X : Menu} variant="ghost" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
