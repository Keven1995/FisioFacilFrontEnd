import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes.js";
import ForgetPassword from "../Modules/Usuarios/View/ForgetPassword";
import Login from "../Modules/Usuarios/View/Login";
import SignUp from "../Modules/Usuarios/View/SignUp";
import ResetPassword from "../Modules/Usuarios/View/ResetPassword";
import Home from "../Components/Home/View/Home";
import Servicos from "../Modules/Servicos/View/Servicos";
import MembrosInferiores from "../Modules/MembrosInferiores/View/MembrosInferiores";
import MembrosSuperiores from "../Modules/MembrosSuperiores/View/MembrosSuperiores";
import ColunaVertebral from "../Modules/ColunaVertebral/View/ColunaVertebral";
import Contact from "../Modules/Contato/View/Contact";
import About from "../Components/About/View/About";
import Planos from "../Components/Planos/View/Planos";
import PlanoBasico from "../Components/Planos/View/PlanoBasico";
import PlanoIntermediario from "../Components/Planos/View/PlanoIntermediario";
import PlanoPlus from "../Components/Planos/View/PlanoPlus";
import Cervical from "../Modules/ColunaVertebral/View/membros/Cervical/Cervical";
import FlexaoCervical from "../Modules/ColunaVertebral/View/membros/Cervical/FlexaoCervical";
import CervicalListaExercicio from "../Modules/Exercicios/ColunaVertebral/CervicalListaExercicio";
import Lombar from "../Modules/ColunaVertebral/View/membros/Lombar/Lombar";
import LombarExercicio from "../Modules/Exercicios/ColunaVertebral/LombarExercicio";
import Sacral from "../Modules/ColunaVertebral/View/membros/Sacral/Sacral";
import SacralExercicio from "../Modules/Exercicios/ColunaVertebral/SacralExercicio";
import Toracica from "../Modules/ColunaVertebral/View/membros/Toracica/Toracica";
import ToracicaExercicio from "../Modules/Exercicios/ColunaVertebral/ToracicaExercicio";
import Joelho from "../Modules/MembrosInferiores/View/membros/Joelho";
import JoelhoExercicio from "../Modules/Exercicios/MembrosInferiores/JoelhoExercicio";
import Pe from "../Modules/MembrosInferiores/View/membros/Pe";
import PeExercicio from "../Modules/Exercicios/MembrosInferiores/PeExercicio";
import Tornozelo from "../Modules/MembrosInferiores/View/membros/Tornozelo";
import TornozeloExercicio from "../Modules/Exercicios/MembrosInferiores/TornozeloExercicio";
import Quadril from "../Modules/MembrosInferiores/View/membros/Quadril";
import QuadrilExercicio from "../Modules/Exercicios/MembrosInferiores/QuadrilExercicio";
import Punho from "../Modules/MembrosSuperiores/View/membros/Punho";
import PunhoExercicio from "../Modules/Exercicios/MembrosSuperiores/PunhoExercicio";
import Ombro from "../Modules/MembrosSuperiores/View/membros/Ombro";
import OmbroExercicio from "../Modules/Exercicios/MembrosSuperiores/OmbroExercicio";
import Mao from "../Modules/MembrosSuperiores/View/membros/Mao";
import MaoExercicio from "../Modules/Exercicios/MembrosSuperiores/MaoExercicio";
import Cotovelo from "../Modules/MembrosSuperiores/View/membros/Cotovelo";
import CotoveloExercicio from "../Modules/Exercicios/MembrosSuperiores/CotoveloExercicio";
import MinhaAssinatura from "../Modules/Assinatura/View/MinhaAssinatura";

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.CADASTRAR} element={<SignUp />} />
    <Route path={ROUTES.ESQUECI_SENHA} element={<ForgetPassword />} />
    <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
    <Route path={ROUTES.MINHA_ASSINATURA} element={<MinhaAssinatura />} />

    <Route path="/servicos" element={<Servicos />} />
    <Route path="/membrosInferiores" element={<MembrosInferiores />} />
    <Route path="/membrosSuperiores" element={<MembrosSuperiores />} />
    <Route path={ROUTES.COLUNA_VERTEBRAL} element={<ColunaVertebral />} />
    <Route path="/contato" element={<Contact />} />
    <Route path="/sobre" element={<About />} />

    <Route path="/planos" element={<Planos />} />
    <Route path="/planoBasico/:membro" element={<PlanoBasico />} />
    <Route path="/planoIntermediario/:membro" element={<PlanoIntermediario />} />
    <Route path="/planoPlus/:membro" element={<PlanoPlus />} />

    <Route path="/coluna-vertebral/cervical" element={<Cervical />} />
    <Route path="/membros/:membro/lista-exercicios" element={<CervicalListaExercicio />} />
    <Route path="/membros/cervical/exercicio-flexao-cervical" element={<FlexaoCervical />} />
    <Route path="/coluna-vertebral/lombar" element={<Lombar />} />
    <Route path="/membros/lombar/exercicios" element={<LombarExercicio />} />
    <Route path="/coluna-vertebral/sacral" element={<Sacral />} />
    <Route path="/membros/sacral/exercicios" element={<SacralExercicio />} />
    <Route path="/coluna-vertebral/toracica" element={<Toracica />} />
    <Route path="/membros/toracica/exercicios" element={<ToracicaExercicio />} />

    <Route path="/membros-inferiores/joelho" element={<Joelho />} />
    <Route path="/membros/joelho/exercicios" element={<JoelhoExercicio />} />
    <Route path="/membros-inferiores/pe" element={<Pe />} />
    <Route path="/membros/pe/exercicios" element={<PeExercicio />} />
    <Route path="/membros-inferiores/tornozelo" element={<Tornozelo />} />
    <Route path="/membros/tornozelo/exercicios" element={<TornozeloExercicio />} />
    <Route path="/membros-inferiores/quadril" element={<Quadril />} />
    <Route path="/membros/quadril/exercicios" element={<QuadrilExercicio />} />

    <Route path="/membros-superiores/punho" element={<Punho />} />
    <Route path="/membros/punho/exercicios" element={<PunhoExercicio />} />
    <Route path="/membros-superiores/ombro" element={<Ombro />} />
    <Route path="/membros/ombro/exercicios" element={<OmbroExercicio />} />
    <Route path="/membros-superiores/mao" element={<Mao />} />
    <Route path="/membros/mao/exercicios" element={<MaoExercicio />} />
    <Route path="/membros-superiores/cotovelo" element={<Cotovelo />} />
    <Route path="/membros/cotovelo/exercicios" element={<CotoveloExercicio />} />
  </Routes>
);

export default AppRoutes;
