import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/PlanosCategoria.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { buildExercisePath } from "../../../config/memberExerciseRoutes.js";
import { ApiRequestError, selecionarAssinatura } from "../../../Modules/Assinatura/service/minhaAssinaturaApi.js";
import { useState } from "react";

const PlanoPlus = () => {
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
      await selecionarAssinatura({ planoNome: "Plus", membroSlug: membro });
      navigate(buildExercisePath(membro, "plus"));
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
    <div className="planos-categorias-container" aria-labelledby="plano-plus-title">
      <h1 id="plano-plus-title" className="mb-4">
        Plano Plus
      </h1>
      <p>Plano completo com acesso total aos exercicios disponiveis para o membro escolhido.</p>
      <p>
        Melhor opcao para quem quer uma rotina mais ampla e acompanhamento continuo de evolucao.
      </p>
      {errorMessage && <p className="text-danger fw-semibold mt-2">{errorMessage}</p>}
      <button className="btn btn-primary mt-3" onClick={handleRedirect} disabled={isSubmitting}>
        {isSubmitting ? "Carregando..." : `Ver exercicios para ${membro}`}
      </button>
    </div>
  );
};

export default PlanoPlus;

