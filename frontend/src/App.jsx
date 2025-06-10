import React from "react";
import Header from "./pages/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import ShoppingCart from "./pages/cart/ShoppingCart";
import Cart from "./pages/cart/Cart";
import ProductsPage from "./pages/product/list/ProductsPage";
import BannerPage from "./pages/Landing/BannerPage";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <BannerPage />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
