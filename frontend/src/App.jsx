import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import MainRoutes from "./routes/MainRoutes";

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
