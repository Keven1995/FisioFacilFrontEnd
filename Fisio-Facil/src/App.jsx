import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ForgetPassword from "./Modules/Usuarios/View/ForgetPassword";
import Login from "./Modules/Usuarios/View/Login";
import SignUp from "./Modules/Usuarios/View/SignUp";
import MembrosInferiores from "./Modules/MembrosInferiores/View/MembrosInferiores";
import MembrosSuperiores from "./Modules/MembrosSuperiores/View/MembrosSuperiores";
import ColunaVertebral from "./Modules/ColunaVertebral/View/ColunaVertebral";
import CategoriaMembros from "./Modules/CategoriaMembros/View/CategoriaMembros";
import Servicos from "./Modules/Servicos/View/Servicos";
import About from "./Components/About/View/About";
import Home from "./Components/Home/View/Home";
import Contact from './Modules/Contato/View/Contact';

function App() {
  const location = useLocation();

  const isLoginPage = ["/login", "/cadastrar", "/esqueciaSenha"].includes(
    location.pathname
  );

  return (
    <div className="App">
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/esqueciaSenha" element={<ForgetPassword />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/categoriaMembros" element={<CategoriaMembros />} />
        <Route path="/membrosInferiores" element={<MembrosInferiores />} />
        <Route path="/membrosSuperiores" element={<MembrosSuperiores />} />
        <Route path="/colunaVertebral" element={<ColunaVertebral />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
