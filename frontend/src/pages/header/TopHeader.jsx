import React from "react";
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

const TopHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.cart);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleAuthClick = () => {
    isAuthenticated ? handleLogout() : navigate("/login");
  };

  return (
    <div className="header-container">
      <div className="header-grid">
        <div className="header-logo">
          <Logo
            image="/logo-icon.jpg"
            text="cyber"
            size="lg"
            textPosition="right"
          />
        </div>

        <div className="header-search">
          <InputField
            placeholder="Search for products"
            icon={Search}
            showIcon
          />
        </div>

        <nav className="header-nav">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        <div className="header-icons">
          <Icon
            icon={Heart}
            variant="ghost"
            size="sd"
            onClick={() => navigate("/orders")}
          />
          <div className="relative w-fit">
            <Icon
              icon={ShoppingCart}
              size="md"
              onClick={() => navigate("/cart")}
            />
            {totalQuantity > 0 && (
              <Badge
                size="sm"
                variant="danger"
                position="top-right"
                className="!absolute -top-1 -right-1"
              >
                {totalQuantity}
              </Badge>
            )}
          </div>
          <Icon
            icon={isAuthenticated ? LogOutIcon : LogIn}
            variant="ghost"
            size="sd"
            onClick={handleAuthClick}
          />
          {isAuthenticated && <Icon icon={User} variant="ghost" size="sd" />}
        </div>

        <div className="header-mobile-toggle">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon icon={mobileMenuOpen ? X : Menu} variant="ghost" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
