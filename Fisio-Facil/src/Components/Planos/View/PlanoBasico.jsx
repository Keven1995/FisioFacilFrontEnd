import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/PlanosCategoria.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { buildExercisePath } from "../../../config/memberExerciseRoutes.js";
import { ApiRequestError, selecionarAssinatura } from "../../../Modules/Assinatura/service/minhaAssinaturaApi.js";
import { useState } from "react";

const PlanoBasico = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { membro } = useParams();
  const { isAuthenticated, logout } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRedirect = async () => {
    if (!isAuthenticated) {
      navigate(ROUTES.LOGIN, { state: { from: location.pathname } });
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await selecionarAssinatura({ planoNome: "Basico", membroSlug: membro });
      navigate(buildExercisePath(membro, "basico"));
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 401) {
        logout();
        navigate(ROUTES.LOGIN, {
          state: {
            from: location.pathname,
            message: "Sua sessao expirou. Faca login novamente.",
          },
        });
        return;
      }

      setErrorMessage(error.message || "Nao foi possivel continuar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="planos-categorias-container" aria-labelledby="plano-basico-title">
      <h1 id="plano-basico-title" className="mb-4">
        Plano Basico
      </h1>
      <p>Plano de entrada para iniciar a rotina de fisioterapia com foco no essencial.</p>
      <p>
        Neste plano, voce tera acesso aos exercicios fundamentais para evoluir com seguranca no membro
        selecionado.
      </p>
      {errorMessage && <p className="text-danger fw-semibold mt-2">{errorMessage}</p>}
      <button
        className="btn btn-primary mt-3"
        onClick={handleRedirect}
        disabled={isSubmitting}
        aria-label={`Ver exercicios para ${membro}`}
      >
        {isSubmitting ? "Carregando..." : `Ver exercicios para ${membro}`}
      </button>
    </div>
  );
};

export default PlanoBasico;

