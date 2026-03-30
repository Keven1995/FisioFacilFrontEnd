import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { apiFetch } from "../../../config/httpClient.js";
import "../View/Styles/ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    try {
      const response = await apiFetch("/usuarios/esqueci-senha", {
        method: "POST",
        body: { email },
      });

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
    } catch {
      setMessage({
        type: "error",
        text: "Falha na conexao. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="forget-container">
        <form onSubmit={handleSubmit}>
          <h1>FisioFacil</h1>
          {message && <div className={`message ${message.type}`}>{message.text}</div>}
          <div className="input-field">
            <input
              type="email"
              placeholder="Insira um e-mail valido"
              onChange={(event) => setEmail(event.target.value)}
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
