import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Planos/View/Styles/PlanosCategoria.css";
import { useNavigate } from "react-router-dom";

const PlanoPlus = ({ membroSelecionado }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/membros/${membroSelecionado}/exercicios`);
  };

  return (
    <div className="planos-categorias-container">
      <h1>Plano Plus</h1>
      <p>Inclui 8 exercícios e 8 alongamentos com vídeos e imagens.</p>
      <button className="btn btn-primary mt-3" onClick={handleRedirect}>
        Ver exercícios e alongamentos de {membroSelecionado}
      </button>
    </div>
  );
};

export default PlanoPlus;
