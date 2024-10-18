import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/usuarios/esqueci-senha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
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
            placeholder="Insira um email válido"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <button type="submit" className="btn">
          Esqueci a senha
        </button>
      </form>
    </div>
  );
};

export default Login;
