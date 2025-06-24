import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  X,
  Heart,
  ShoppingCart,
  User,
  LogIn,
  LogOutIcon,
  Search,
} from "lucide-react";

import Icon from "../../components/ui/Icon";
import NavItem from "../../components/ui/NavItems";
import Badge from "../../components/ui/Badge";
import { logout } from "../../features/user/userSlice";
import { useSearchProducts } from "../../features/products/productHooks";
import truncate from "../../utils/truncate";
import { useUser } from "../../features/user/userHooks";

const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useUser();
  const { items } = useSelector((state) => state.cart);

  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { products, search, loading } = useSearchProducts();

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 1) {
        search(query);
        setShowResults(true);
      } else {
        setShowResults(false);
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);
  const searchRef = useRef();

  if (!mobileMenuOpen) return null;

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="mobile-nav-inner">
        <span className="flex items-center gap-2 text-lg font-semibold">
          <img src="/logo-icon.jpg" className="w-8 h-8 rounded" />
          Cyber
        </span>
        <button onClick={() => setMobileMenuOpen(false)}>
          <Icon icon={X} variant="ghost" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 mt-2" ref={searchRef}>
        <input
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full px-4 py-2 text-sm border rounded focus:outline-none focus:ring"
        />
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="px-4 mt-2">
          {loading && (
            <div className="p-3 text-sm text-gray-500 bg-white border rounded shadow">
              Loading...
            </div>
          )}
          {!loading && products.length > 0 && (
            <div className="space-y-2 overflow-y-auto max-h-60">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="search-item"
                  onClick={() => {
                    navigate(`/product/${product._id}`);
                    setMobileMenuOpen(false);
                  }}
                >
                  <img
                    src={product.images[0]?.url || "/placeholder.png"}
                    alt={product.name}
                    className="search-image"
                  />
                  <p className="search-text">{truncate(product.name, 30)}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && products.length === 0 && (
            <div className="p-3 text-sm text-gray-500 bg-white border rounded shadow">
              No products found
            </div>
          )}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-col px-4 py-4 space-y-4 border-t">
        <NavItem to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
        <NavItem
          to="/about"
          label="About"
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavItem
          to="/shop"
          label="Shop"
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavItem
          to="/contact"
          label="Contact"
          onClick={() => setMobileMenuOpen(false)}
        />
      </div>

      {/* Action Links */}
      <div className="flex flex-col px-4 py-4 space-y-4 border-t">
        <NavItem
          to="/wishlist"
          label="Wishlist"
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavItem
          to="/cart"
          label={`Cart${items.length > 0 ? ` (${items.length})` : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <NavItem
          to={isAuthenticated ? "/user/profile" : "/login"}
          label={isAuthenticated ? "Profile" : "Login"}
          onClick={() => {
            if (isAuthenticated) {
              navigate("/user/profile");
            } else {
              navigate("/login");
            }
            setMobileMenuOpen(false);
          }}
        />
        {isAuthenticated && (
          <NavItem
            to="/logout"
            label="Logout"
            onClick={() => {
              handleLogout();
              navigate("/login");
              setMobileMenuOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
