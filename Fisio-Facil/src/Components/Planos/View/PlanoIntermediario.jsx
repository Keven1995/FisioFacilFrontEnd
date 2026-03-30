import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/PlanosCategoria.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { buildExercisePath } from "../../../config/memberExerciseRoutes.js";
import { ApiRequestError, selecionarAssinatura } from "../../../Modules/Assinatura/service/minhaAssinaturaApi.js";
import { useState } from "react";

const PlanoIntermediario = () => {
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
      await selecionarAssinatura({ planoNome: "Intermediario", membroSlug: membro });
      navigate(buildExercisePath(membro, "intermediario"));
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
    <div className="planos-categorias-container" aria-labelledby="plano-intermediario-title">
      <h1 id="plano-intermediario-title" className="mb-4">
        Plano Intermediario
      </h1>
      <p>Plano para evolucao progressiva com maior variedade de exercicios guiados.</p>
      <p>
        Indicado para quem ja iniciou a rotina e deseja ampliar o volume de exercicios com mais
        acompanhamento.
      </p>
      {errorMessage && <p className="text-danger fw-semibold mt-2">{errorMessage}</p>}
      <button className="btn btn-primary mt-3" onClick={handleRedirect} disabled={isSubmitting}>
        {isSubmitting ? "Carregando..." : `Ver exercicios para ${membro}`}
      </button>
    </div>
  );
};

export default PlanoIntermediario;

