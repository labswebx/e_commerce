import React, { useState } from "react";
import TopHeader from "./TopHeader";
import SubNav from "./SubNav";
import MobileHeader from "./MobileHeader";
import { useLocation, matchPath } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const matchCategoryDetail = matchPath("/categories/:id", location.pathname);

  const showSubNav =
    location.pathname === "/" ||
    location.pathname === "/categories" ||
    matchCategoryDetail;
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
