import React from "react";
import Header from "./pages/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
