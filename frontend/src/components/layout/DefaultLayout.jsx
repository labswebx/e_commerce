import { Outlet } from "react-router-dom";
import Header from "../../pages/header/Header";
import Footer from "../../pages/Footer/Footer";

// layout wraps public or general pages
const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <Header />

      {/*  Main Content Area  */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
