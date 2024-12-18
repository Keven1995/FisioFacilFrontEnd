import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/PlanosCategoria.css";
import { useNavigate, useParams } from "react-router-dom";

const PlanoBasico = () => {
  const navigate = useNavigate();
  const { membro } = useParams(); // Captura o membro da URL

  const handleRedirect = () => {
    navigate(`/membros/${membro}/lista-exercicios?plano=basico`);
  };

  return (
    <div
      className="planos-categorias-container"
      aria-labelledby="plano-basico-title"
    >
      <h1 id="plano-basico-title" className="mb-4">
        Plano Básico
      </h1>
      <p>
        Este é o plano básico que oferece funcionalidades essenciais para
        atender às suas necessidades.
      </p>
      <p>
        No plano básico, você terá acesso a <strong>3 exercícios</strong> com
        vídeos e imagens explicativas para guiá-lo em suas atividades.
      </p>
      <button
        className="btn btn-primary mt-3"
        onClick={handleRedirect}
        aria-label={`Ver exercícios do membro ${membro}`}
      >
        Ver exercícios e alongamentos para {membro}
      </button>
    </div>
  );
};

export default PlanoBasico;
