import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/usuarios/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, userName, password, confirmPassword }),
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
    <div className="container">
      
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
            type="text"
            placeholder="Nome de usuário"
            onChange={(e) => setUserName(e.target.value)}
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
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirmar Senha"
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" className="btn">
          Cadastrar
        </button>
        <div className="signup-link">
          <p>
            Realizou o cadastro? <a href="#">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
