import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider.jsx";
import { ROUTES } from "../../../constants/routes.js";
import { buildExercisePath } from "../../../config/memberExerciseRoutes.js";
import {
  buscarMinhaAssinatura,
  iniciarExercicioAssinatura,
} from "../service/minhaAssinaturaApi.js";
import "./Styles/MinhaAssinatura.css";

const MinhaAssinatura = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isStartingExercise, setIsStartingExercise] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);

  const hasAssinatura = Boolean(data?.planoNome && data?.membroSlug);

  const progressPercentage = useMemo(() => {
    const availableCount = data?.exerciciosDisponiveis?.length || 0;
    const inProgressCount = data?.exerciciosEmAndamento?.length || 0;

    if (availableCount === 0) {
      return 0;
    }

    return Math.round((inProgressCount / availableCount) * 100);
  }, [data]);

  const loadMinhaAssinatura = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const responseData = await buscarMinhaAssinatura();
      setData(responseData);
    } catch (error) {
      setErrorMessage(error.message || "Erro ao carregar a assinatura.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }
    loadMinhaAssinatura();
  }, [isAuthenticated]);

  const handleIniciarExercicio = async (exerciseKey) => {
    setIsStartingExercise(true);
    setErrorMessage("");
    try {
      await iniciarExercicioAssinatura(exerciseKey);
      await loadMinhaAssinatura();
    } catch (error) {
      setErrorMessage(error.message || "Nao foi possivel iniciar o exercicio.");
    } finally {
      setIsStartingExercise(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="assinatura-page">
        <div className="assinatura-container">
          <h1>Minha assinatura</h1>
          <p>Voce precisa estar logado para acessar esta area.</p>
          <Link to={ROUTES.LOGIN} className="assinatura-link-button">
            Fazer login
          </Link>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="assinatura-page">
        <div className="assinatura-container">
          <h1>Minha assinatura</h1>
          <p>Carregando seus dados...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="assinatura-page">
      <div className="assinatura-container">
        <header className="assinatura-header">
          <h1>Minha assinatura</h1>
          <p>Acompanhe seu plano e o andamento dos exercicios.</p>
        </header>

        {errorMessage && <p className="assinatura-error">{errorMessage}</p>}

        {!hasAssinatura && (
          <article className="assinatura-empty-card">
            <h2>Nenhuma assinatura selecionada</h2>
            <p>Escolha um plano em um membro para liberar seus exercicios personalizados.</p>
            <button type="button" onClick={() => navigate("/servicos")} className="assinatura-link-button">
              Escolher assinatura
            </button>
          </article>
        )}

        {hasAssinatura && (
          <>
            <article className="assinatura-summary-card">
              <div>
                <h2>{data.planoNome}</h2>
                <p>
                  Membro selecionado: <strong>{data.membroNome}</strong>
                </p>
                <p>
                  Usuario: <strong>{data.nomeUsuario}</strong>
                </p>
              </div>
              <div className="assinatura-progress">
                <span>{progressPercentage}% em andamento</span>
                <div className="assinatura-progress-track" aria-hidden="true">
                  <div className="assinatura-progress-fill" style={{ width: `${progressPercentage}%` }} />
                </div>
                <small>
                  {data.exerciciosEmAndamento.length} de {data.exerciciosDisponiveis.length} exercicios iniciados
                </small>
              </div>
            </article>

            <div className="assinatura-grid">
              <article className="assinatura-list-card">
                <h3>Exercicios em andamento</h3>
                {data.exerciciosEmAndamento.length === 0 ? (
                  <p className="assinatura-muted">Nenhum exercicio iniciado ainda.</p>
                ) : (
                  <ul>
                    {data.exerciciosEmAndamento.map((exercise) => (
                      <li key={exercise.key}>
                        <span>{exercise.titulo}</span>
                        <Link to={buildExercisePath(data.membroSlug, data.planoNome)}>Acessar</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </article>

              <article className="assinatura-list-card">
                <h3>Exercicios nao acessados</h3>
                {data.exerciciosNaoAcessados.length === 0 ? (
                  <p className="assinatura-muted">Todos os exercicios disponiveis ja foram iniciados.</p>
                ) : (
                  <ul>
                    {data.exerciciosNaoAcessados.map((exercise) => (
                      <li key={exercise.key}>
                        <span>{exercise.titulo}</span>
                        <button
                          type="button"
                          disabled={isStartingExercise}
                          onClick={() => handleIniciarExercicio(exercise.key)}
                        >
                          Iniciar
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MinhaAssinatura;
