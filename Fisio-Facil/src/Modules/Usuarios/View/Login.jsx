import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import "../View/Styles/Login.css";
import "../../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(""); // Estado de erro
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const from = location.state?.from || "/ColunaVertebral";

  const apiUrl = import.meta.env.VITE_API_URL || "https://fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setError("");

    fetch(`${apiUrl}/api/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Credenciais inválidas.");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userName", data.userName);
        login(data.token, data.userName);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message || "Erro ao realizar login.");
      })
      .finally(() => setIsLoading(false));
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
        {error && <p className="error-message">{error}</p>}
        <div className="recall-forget">
          <label className="label">
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="/esqueciaSenha">Esqueceu a senha?</a>
        </div>
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Login"}
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
