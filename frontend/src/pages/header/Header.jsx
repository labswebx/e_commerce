import React, { useState } from "react";
import TopHeader from "./TopHeader";
import SubNav from "./SubNav";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
    <TopHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <SubNav />
      <MobileHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
