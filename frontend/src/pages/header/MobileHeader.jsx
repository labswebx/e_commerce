import React from "react";
import NavItem from "../../components/ui/NavItems";

const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  if (!mobileMenuOpen) return null;

  return (
    <div className="bg-white border-t md:hidden">
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-6 text-base font-medium shadow-sm">
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
