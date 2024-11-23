import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
import Contact from "./Modules/Contato/View/Contact";
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
import CervicalExercicio from "./Modules/Exercicios/ColunaVertebral/CervicalExercicio";
import LombarExercicio from "./Modules/Exercicios/ColunaVertebral/LombarExercicio";
import SacralExercicio from "./Modules/Exercicios/ColunaVertebral/SacralExercicio";
import ToracicaExercicio from "./Modules/Exercicios/ColunaVertebral/ToracicaExercicio";
import JoelhoExercicio from "./Modules/Exercicios/MembrosInferiores/JoelhoExercicio";
import QuadrilExercicio from "./Modules/Exercicios/MembrosInferiores/QuadrilExercicio";
import PeExercicio from "./Modules/Exercicios/MembrosInferiores/PeExercicio";
import TornozeloExercicio from "./Modules/Exercicios/MembrosInferiores/TornozeloExercicio";
import PunhoExercicio from "./Modules/Exercicios/MembrosSuperiores/PunhoExercicio";
import CotoveloExercicio from "./Modules/Exercicios/MembrosSuperiores/CotoveloExercicio";
import MaoExercicio from "./Modules/Exercicios/MembrosSuperiores/MaoExercicio";
import OmbroExercicio from "./Modules/Exercicios/MembrosSuperiores/OmbroExercicio";

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
        <Route path="/membrosInferiores" element={<MembrosInferiores />} />
        <Route path="/membrosSuperiores" element={<MembrosSuperiores />} />
        <Route path="/colunaVertebral" element={<ColunaVertebral />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />

        <Route path="/planos" element={<Planos />} />
        <Route path="/planoBasico/:membro" element={<PlanoBasico />} />
        <Route path="/planoIntermediario/:membro" element={<PlanoIntermediario />} />
        <Route path="/planoPlus/:membro" element={<PlanoPlus />} />

        <Route path="/coluna-vertebral/cervical" element={<Cervical />} />
        <Route path="/membros/cervical/exercicios" element={<CervicalExercicio />} />
        <Route path="/coluna-vertebral/lombar" element={<Lombar />} />
        <Route path="/membros/lombar/exercicios" element={<LombarExercicio />} />
        <Route path="/coluna-vertebral/sacral" element={<Sacral />} />
        <Route path="membros/sacral/exercicios" element={<SacralExercicio />} />
        <Route path="/coluna-vertebral/toracica" element={<Toracica />} />
        <Route path="membros/toracica/exercicios" element={<ToracicaExercicio />} />

        <Route path="/membros-inferiores/joelho" element={<Joelho />} />
        <Route path="membros/joelho/exercicios" element={<JoelhoExercicio />} />
        <Route path="/membros-inferiores/pe" element={<Pe />} />
        <Route path="membros/pe/exercicios" element={<PeExercicio />} />
        <Route path="/membros-inferiores/tornozelo" element={<Tornozelo />} />
        <Route path="membros/tornozelo/exercicios" element={<TornozeloExercicio />} />
        <Route path="/membros-inferiores/quadril" element={<Quadril />} />
        <Route path="membros/quadril/exercicios" element={<QuadrilExercicio />} />

        <Route path="/membros-superiores/punho" element={<Punho />} />
        <Route path="membros/punho/exercicios" element={<PunhoExercicio />} />
        <Route path="/membros-superiores/ombro" element={<Ombro />} />
        <Route path="membros/ombro/exercicios" element={<OmbroExercicio />} />
        <Route path="/membros-superiores/mao" element={<Mao />} />
        <Route path="membros/mao/exercicios" element={<MaoExercicio />} />
        <Route path="/membros-superiores/cotovelo" element={<Cotovelo />} />
        <Route path="membros/cotovelo/exercicios" element={<CotoveloExercicio />} />
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
