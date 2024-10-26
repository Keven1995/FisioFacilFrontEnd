import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../View/Styles/Login.css";
import "../../../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
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
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="/esqueciaSenha">Esqueceu a senha?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="/cadastrar">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;