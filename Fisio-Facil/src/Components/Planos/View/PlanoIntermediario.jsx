import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Planos/View/Styles/PlanosCategoria.css";
import { useNavigate } from "react-router-dom";

const PlanoIntermediario = ({ membroSelecionado }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/membros/${membroSelecionado}/exercicios`);
    };

    return (
        <div
            className="planos-categorias-container"
            aria-labelledby="plano-intermediario-title"
        >
            <h1 id="plano-intermediario-title" className="mb-4">
                Plano Intermediário
            </h1>
            <p>
                O plano intermediário é ideal para quem deseja ir além do básico, com
                exercícios mais avançados que ajudam no desenvolvimento gradual das suas
                habilidades físicas.
            </p>
            <p>
                Neste plano, você terá acesso a <strong>5 exercícios</strong> com vídeos
                e imagens explicativas, para garantir um acompanhamento visual e
                detalhado em suas práticas.
            </p>
            <button className="btn btn-primary mt-3" onClick={handleRedirect}>
            Ver exercícios e alomgamentos {membroSelecionado}
            </button>
        </div>
    );
};

export default PlanoIntermediario;
