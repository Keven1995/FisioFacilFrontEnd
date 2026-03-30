import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { apiFetch } from "../../../config/httpClient.js";
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await apiFetch("/usuarios/login", {
        method: "POST",
        body: { email: email.trim(), password },
      });

      if (!response.ok) {
        let errorMessage = "Credenciais invalidas.";
        try {
          const errorBody = await response.json();
          if (errorBody?.message) {
            errorMessage = errorBody.message;
          }
        } catch {
          // Mantem mensagem padrao quando a resposta nao vem em JSON.
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      login(data.token, data.userName);
      navigate(from, { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Erro ao realizar login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container login-page">
      <form onSubmit={handleSubmit}>
        <h1>FisioFacil</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
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
            Nao tem uma conta? <Link to={ROUTES.CADASTRAR}>Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
