import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../View/Styles/ForgetPassword.css";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiUrl =
    import.meta.env.VITE_API_URL || "https://fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net";

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (novaSenha !== confirmarSenha) {
      setMessage({ type: "error", text: "As senhas não coincidem" });
      return;
    }

    if (!validatePassword(novaSenha)) {
      setMessage({
        type: "error",
        text: "A senha deve ter pelo menos 8 caracteres, um número e um símbolo.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiUrl}/api/usuarios/redefinir-senha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, novaSenha }),
      });

      if (!response.ok) {
        throw new Error("Erro ao redefinir a senha.");
      }

      setMessage({ type: "success", text: "Senha redefinida com sucesso!" });
    } catch {
      setMessage({
        type: "error",
        text: "Falha ao redefinir a senha. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Redefinir Senha</h1>
        {message && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}
        <div className="input-field">
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirmar nova senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Redefinindo..." : "Redefinir"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
