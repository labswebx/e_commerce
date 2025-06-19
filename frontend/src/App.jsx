import Header from "./pages/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
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
