import React, { useState } from "react";
import TopHeader from "./TopHeader";
import SubNav from "./SubNav";
import MobileHeader from "./MobileHeader";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const showSubNav =
    location.pathname === "/" || location.pathname === "/categories";
  return (
    <header
      className={`bg-white shadow-sm ${
        showSubNav ? "" : "border-b border-gray-400"
      }`}
    >
      <TopHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {showSubNav && <SubNav />}
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
