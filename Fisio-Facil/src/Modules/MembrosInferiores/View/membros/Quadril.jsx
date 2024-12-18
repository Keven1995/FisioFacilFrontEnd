import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Quadrilimg from "../membros/img/quadril.jpeg";

const Quadril = () => {

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS INFERIORES</h1>
      <h2 className="member-subtitle">Quadril</h2>
      <div className="membro-card">
        <img src={Quadrilimg} alt="Quadril" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O quadril é uma das articulações mais fortes e estáveis do corpo,
            responsável por sustentar o peso e permitir movimentos como andar,
            correr, agachar e sentar. Como uma articulação esferoide, o quadril
            possui uma ampla faixa de movimento, incluindo flexão, extensão,
            rotação e abdução, o que é crucial para a mobilidade e estabilidade
            corporal.
          </p>

          <div className="plan-buttons">
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoBasico/:membro")}
            >
              Básico
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoIntermediario/:membro")}
            >
              Intermediário
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoPlus/:membro")}
            >
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quadril;
