import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Peimg from "../membros/img/pe.jpeg";

const Pe = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS INFERIORES</h1>
      <h2 className="member-subtitle">Pé</h2>
      <div className="membro-card">
        <img src={Peimg} alt="Pe" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O pé é uma das estruturas mais complexas e funcionais do corpo
            humano, projetado para suportar o peso, proporcionar estabilidade,
            absorver impactos e permitir a movimentação durante a caminhada,
            corrida e outras atividades. Composto por ossos, músculos,
            ligamentos e tendões, o pé também é crucial para o equilíbrio e para
            o alinhamento corporal.
          </p>

          <div className="plan-buttons">
            <button className="btn btn-outline-success">Básico</button>
            <button className="btn btn-outline-success">Intermediário</button>
            <button className="btn btn-outline-success">Plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pe;
