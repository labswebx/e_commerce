import React from "react";
import NavItem from "../../components/ui/NavItems";

const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  if (!mobileMenuOpen) return null;

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-inner">
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
