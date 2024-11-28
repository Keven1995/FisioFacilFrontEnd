import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "../View/Styles/ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL || "https://fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net";

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    fetch(`${apiUrl}/api/usuarios/esqueci-senha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setMessage({
            type: "success",
            text: "E-mail enviado com sucesso! Verifique sua caixa de entrada.",
          });
        } else {
          setMessage({
            type: "error",
            text: "Erro ao enviar o e-mail. Tente novamente.",
          });
        }
      })
      .catch(() => {
        setMessage({
          type: "error",
          text: "Falha na conexão. Tente novamente.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="page-wrapper">
      <div className="forget-container">
        <form onSubmit={handleSubmit}>
          <h1>FisioFácil</h1>
          {message && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
          <div className="input-field">
            <input
              type="email"
              placeholder="Insira um e-mail válido"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>

          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
