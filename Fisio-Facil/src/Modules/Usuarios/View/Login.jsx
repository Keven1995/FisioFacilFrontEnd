import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "../View/Styles/Login.css";
import "../../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/usuarios/login", { // URL completa
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('A resposta da rede não foi ok'); // Mensagem em português
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login bem-sucedido:', data); // Mensagem em português
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error('Houve um problema com a operação de fetch:', error); // Mensagem em português
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
