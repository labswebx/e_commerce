import React from "react";
import Logo from "../../components/ui/Logo";
import InputField from "../../components/ui/InputField";
import Icon from "../../components/ui/Icon";
import { Heart, ShoppingCart, User, Search, Menu, X } from "lucide-react";
import NavItem from "../../components/ui/NavItems";

const TopHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="w-full px-4 py-3 bg-white shadow-sm sm:px-6 lg:px-10">
      <div className="grid items-center max-w-screen-xl grid-cols-12 gap-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center col-span-6 md:col-span-2">
          <Logo
            image="/logo-icon.jpg"
            text="cyber"
            size="lg"
            textPosition="right"
          />
        </div>

        {/* Search Bar - visible on md+ */}
        <div className="hidden col-span-3 md:flex">
          <InputField
            placeholder="Search for products"
            icon={Search}
            showIcon
          />
        </div>

        {/* Navigation - visible on md+ */}
        <nav className="justify-center hidden col-span-5 gap-2 text-sm font-medium md:flex">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        {/* Desktop Icons - visible on md+ */}
        <div className="justify-end hidden col-span-2 gap-6 md:flex">
          <Icon icon={Heart} variant="ghost" size="sd" />
          <Icon icon={ShoppingCart} variant="ghost" size="sd" />
          <Icon icon={User} variant="ghost" size="sd" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex justify-end col-span-6 md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon icon={mobileMenuOpen ? X : Menu} variant="ghost" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
