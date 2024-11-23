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
    <div
      className="planos-categorias-container"
      aria-labelledby="plano-plus-title"
    >
      <h1 id="plano-plus-title" className="mb-4">
        Plano Plus
      </h1>
      <p>
        O Plano Plus é a escolha ideal para quem deseja aproveitar ao máximo
        todos os recursos disponíveis. Ele oferece acesso completo às práticas
        de fisioterapia, com exercícios avançados e detalhados.
      </p>
      <p>
        Neste plano, você terá acesso a <strong>todo o leque de exercícios</strong>, incluindo vídeos e imagens
        explicativas para garantir um acompanhamento completo e eficaz.
      </p>
      <button className="btn btn-primary mt-3" onClick={handleRedirect}>
      Ver exercícios e alomgamentos {membroSelecionado}
      </button>
    </div>
  );
};

export default PlanoPlus;
