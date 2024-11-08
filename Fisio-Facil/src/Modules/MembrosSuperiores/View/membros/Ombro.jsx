import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Ombroimg from "../../View/img/ombro.jpeg";

const Ombro = () => {
  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS SUPERIORES</h1>
      <h2 className="member-subtitle">Ombro</h2>
      <div className="membro-card">
        <img src={Ombroimg} alt="Ombro" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O ombro é uma das articulações mais móveis e versáteis do corpo,
            permitindo uma ampla gama de movimentos essenciais para o uso dos
            braços em atividades diárias, como levantar, empurrar, puxar e
            rodar. Por ser uma articulação complexa e altamente flexível, o
            ombro também está sujeito a instabilidades e lesões, o que torna sua
            estrutura robusta e diversificada em termos de suporte e controle
            motor.
          </p>

          <div className="plan-buttons">
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoBasico")}
            >
              Básico
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoIntermediario")}
            >
              Intermediário
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoPlus")}
            >
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ombro;
