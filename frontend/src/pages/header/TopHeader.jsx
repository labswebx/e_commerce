import React from "react";
import Logo from "../../components/ui/Logo";
import InputField from "../../components/ui/InputField";
import Icon from "../../components/ui/Icon";
import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";
import NavItem from "../../components/ui/NavItems";

const TopHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
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
          <Icon icon={Heart} variant="ghost" size="sd" />
          <Icon icon={ShoppingCart} variant="ghost" size="sd" />
          <Icon icon={User} variant="ghost" size="sd" />
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
