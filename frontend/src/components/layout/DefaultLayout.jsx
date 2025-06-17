import { Outlet } from "react-router-dom";
import Header from "../../pages/header/Header";
import Footer from "../../pages/Footer/Footer";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
