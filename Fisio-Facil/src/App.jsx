import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
import Planos from "./Components/Planos/View/Planos";
import Cervical from "./Modules/ColunaVertebral/View/membros/Cervical";
import Lombar from "./Modules/ColunaVertebral/View/membros/Lombar";
import Sacral from "./Modules/ColunaVertebral/View/membros/Sacral";
import Toracica from "./Modules/ColunaVertebral/View/membros/Toracica";
import Joelho from "./Modules/MembrosInferiores/View/membros/Joelho";
import Pe from "./Modules/MembrosInferiores/View/membros/Pe";
import Tornozelo from "./Modules/MembrosInferiores/View/membros/Tornozelo";
import Quadril from "./Modules/MembrosInferiores/View/membros/Quadril";
import Punho from "./Modules/MembrosSuperiores/View/membros/Punho";
import Ombro from "./Modules/MembrosSuperiores/View/membros/Ombro";
import Mao from "./Modules/MembrosSuperiores/View/membros/Mao";
import Cotovelo from "./Modules/MembrosSuperiores/View/membros/Cotovelo";
import PlanoBasico from "./Components/Planos/View/PlanoBasico";
import PlanoIntermediario from "./Components/Planos/View/PlanoIntermediario";
import PlanoPlus from "./Components/Planos/View/PlanoPlus";


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
        <Route path="/planos" element={<Planos />} />
        <Route path="/planoBasico" element={<PlanoBasico />} />
        <Route path="/planoIntermediario" element={<PlanoIntermediario />} />
        <Route path="/planoPlus" element={<PlanoPlus />} />
        <Route path="/cervical" element={<Cervical />} />
        <Route path="/lombar" element={<Lombar />} />
        <Route path="/sacral" element={<Sacral />} />
        <Route path="/toracica" element={<Toracica />} />
        <Route path="/joelho" element={<Joelho />} />
        <Route path="/pe" element={<Pe />} />
        <Route path="/tornozelo" element={<Tornozelo />} />
        <Route path="/quadril" element={<Quadril />} />
        <Route path="/punho" element={<Punho />} />
        <Route path="/ombro" element={<Ombro />} />
        <Route path="/mao" element={<Mao />} />
        <Route path="/cotovelo" element={<Cotovelo />} />

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
