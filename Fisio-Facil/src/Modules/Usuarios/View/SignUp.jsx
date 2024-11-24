import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../View/Styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const apiUrl =
    import.meta.env.VITE_API_URL ||
    "https://fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação das senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // Validação do e-mail
    if (!email.includes("@")) {
      alert("Por favor, insira um e-mail válido!");
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
      .then((data) => {
        console.log(data);
        alert("Cadastro realizado com sucesso!");
        // Redirecionar para a página de login
        window.location.href = "https://fisio-facil-front-end.vercel.app/login";
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao cadastrar, tente novamente!");
      });
  };

  return (
    <div className="page-wrapper">
      <div className="cadastrar-container">
        <form onSubmit={handleSubmit}>
          <h1>FisioFácil</h1>
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
              Realizou o cadastro?{" "}
              <a href="https://fisio-facil-front-end.vercel.app/login">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
