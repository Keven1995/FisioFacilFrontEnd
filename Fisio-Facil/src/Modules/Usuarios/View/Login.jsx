import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import "../View/Styles/Login.css";
import "../../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const from = location.state?.from || "/ColunaVertebral";

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/api/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('A resposta da rede não foi ok'); 
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login bem-sucedido:', data);
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userName', data.userName);
        login(data.token, data.userName);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Houve um problema com a operação de fetch:', error); 
      });
  };

  return (
    <div className="login-container login-page">
      <form onSubmit={handleSubmit}>
        <h1>FisioFácil</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label className="label">
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="/esqueciaSenha">Esqueceu a senha?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="signup-link">
          <p className="p">
            Não tem uma conta? <a href="/cadastrar">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
