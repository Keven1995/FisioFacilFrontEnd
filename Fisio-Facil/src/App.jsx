import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { LAYOUT_HIDDEN_ROUTES } from "./constants/routes.js";

const AppShell = () => {
  const { pathname } = useLocation();
  const shouldShowLayout = !LAYOUT_HIDDEN_ROUTES.includes(pathname);

  return (
    <div className="App">
      {shouldShowLayout && <Header />}
      <main className="app-main">
        <AppRoutes />
      </main>
      {shouldShowLayout && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
