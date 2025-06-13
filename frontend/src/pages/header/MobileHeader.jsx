import React from "react";
import NavItem from "../../components/ui/NavItems";
import Icon from "../../components/ui/Icon";
import { X } from "lucide-react";

const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  if (!mobileMenuOpen) return null;

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-inner">
        <span className="text-lg font-semibold">Menu</span>
        <button onClick={() => setMobileMenuOpen(false)}>
          <Icon icon={X} variant="ghost" />
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <NavItem href="/" onClick={() => setMobileMenuOpen(false)}>
          Home
        </NavItem>
        <NavItem href="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </NavItem>
        <NavItem href="/shop" onClick={() => setMobileMenuOpen(false)}>
          Shop
        </NavItem>
        <NavItem href="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </NavItem>
      </div>
    </div>
  );
};

export default MobileHeader;
