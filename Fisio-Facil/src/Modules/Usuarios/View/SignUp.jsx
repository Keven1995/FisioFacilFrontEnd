import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { ROUTES } from "../../../constants/routes.js";
import { apiFetch } from "../../../config/httpClient.js";
import "../View/Styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);

    if (!email || !userName || !password || !confirmPassword) {
      setMessage("Por favor, preencha todos os campos!");
      setMessageType("error");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Por favor, insira um e-mail valido!");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas nao coincidem!");
      setMessageType("error");
      return;
    }

    try {
      const response = await apiFetch("/usuarios/signup", {
        method: "POST",
        body: { email, nomeUsuario: userName, senha: password },
      });

      if (!response.ok) {
        throw new Error("Erro no cadastro");
      }

      setMessage("Cadastro realizado com sucesso!");
      setMessageType("success");
      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 2000);
    } catch (requestError) {
      console.error(requestError);
      setMessage("Erro ao cadastrar, tente novamente!");
      setMessageType("error");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="cadastrar-container">
        <form onSubmit={handleSubmit}>
          <h1>FisioFacil</h1>

          {message && <div className={`message ${messageType}`}>{message}</div>}

          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome de usuario"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit" className="btn">
            Cadastrar
          </button>
          <div className="signup-link">
            <p className="p">
              Realizou o cadastro? <Link to={ROUTES.LOGIN}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
