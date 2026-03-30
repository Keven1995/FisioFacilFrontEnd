import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { API_BASE_URL } from "../../../config/api.js";
import "../View/Styles/Login.css";
import "../../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const from = location.state?.from || ROUTES.COLUNA_VERTEBRAL;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setError("");

    fetch(`${API_BASE_URL}/usuarios/login`, {
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
        login(data.token, data.userName);
        navigate(from, { replace: true });
      })
      .catch((requestError) => {
        setError(requestError.message || "Erro ao realizar login.");
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
          <Link to={ROUTES.ESQUECI_SENHA}>Esqueceu a senha?</Link>
        </div>
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Login"}
        </button>
        <div className="signup-link">
          <p className="p">
            Não tem uma conta? <Link to={ROUTES.CADASTRAR}>Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
