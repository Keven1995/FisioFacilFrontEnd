import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Membro.css";
import Sacralimg from "../membros/img/sacral.jpg";

const Sacral = () => {

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">COLUNA VERTEBRAL</h1>
      <h2 className="member-subtitle">Sacral</h2>
      <div className="membro-card">
        <img src={Sacralimg} alt="sacral" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            A região sacral é composta por cinco vértebras fundidas na base da
            coluna vertebral, formando o sacro, que conecta a coluna à pelve.
            Ela é essencial para a estabilidade do tronco e a transferência de
            peso entre a parte superior e inferior do corpo. Este pacote oferece
            exercícios e orientações específicas para fortalecer a região
            sacral, promovendo estabilidade pélvica e ajudando a prevenir dores
            e desconfortos nessa área.
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

export default Sacral;
