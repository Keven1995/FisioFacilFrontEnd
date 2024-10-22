import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar" element={<SignUp />} />
          <Route path="/EsqueciaSenha" element={<ForgetPassword />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/CategoriaMembros" element={<CategoriaMembros />} />
          <Route path="/MembrosInferiores" element={<MembrosInferiores />} />
          <Route path="/MembrosSuperiores" element={<MembrosSuperiores />} />
          <Route path="/ColunaVertebral" element={<ColunaVertebral />} />
          <Route path="/Sobre" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
