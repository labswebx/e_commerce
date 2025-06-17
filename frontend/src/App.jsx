import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import MainRoutes from "./routes/MainRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Router>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px",
            },
          }}
        />
        <MainRoutes />
      </Router>
    </div>
  );
};

export default App;
