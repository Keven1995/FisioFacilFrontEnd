import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ForgetPassword from "./Modules/Usuarios/View/ForgetPassword";
import Login from "./Modules/Usuarios/View/Login";
import SignUp from "./Modules/Usuarios/View/SignUp";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar" element={<SignUp />} />
          <Route path="/EsqueciaSenha" element={<ForgetPassword />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
