import React from "react";
import Header from "./pages/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
