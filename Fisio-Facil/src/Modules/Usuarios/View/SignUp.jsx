import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { ROUTES } from "../../../constants/routes.js";
import "../View/Styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const apiUrl =
    import.meta.env.VITE_API_URL ||
    "https://fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net";

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !userName || !password || !confirmPassword) {
      setMessage("Por favor, preencha todos os campos!");
      setMessageType("error");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Por favor, insira um e-mail válido!");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem!");
      setMessageType("error");
      return;
    }

    fetch(`${apiUrl}/api/usuarios/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, nomeUsuario: userName, senha: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro no cadastro");
        }
        return response.json();
      })
      .then(() => {
        setMessage("Cadastro realizado com sucesso!");
        setMessageType("success");
        setTimeout(() => {
          navigate(ROUTES.LOGIN);
        }, 2000);
      })
      .catch((requestError) => {
        console.error(requestError);
        setMessage("Erro ao cadastrar, tente novamente!");
        setMessageType("error");
      });
  };

  return (
    <div className="page-wrapper">
      <div className="cadastrar-container">
        <form onSubmit={handleSubmit}>
          <h1>FisioFácil</h1>

          {message && <div className={`message ${messageType}`}>{message}</div>}

          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome de usuário"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
