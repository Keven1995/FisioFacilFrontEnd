import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Membro.css";
import Lombarimg from "../membros/img/lombar.jpg";

const Lombar = () => {

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">COLUNA VERTEBRAL</h1>
      <h2 className="member-subtitle">Lombar</h2>
      <div className="membro-card">
        <img src={Lombarimg} alt="lombar" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            A região lombar é composta por cinco vértebras localizadas na parte
            inferior da coluna vertebral, sendo responsável por suportar grande
            parte do peso do corpo e permitir movimentos como flexão e extensão
            do tronco. Por sua importância na estabilização e mobilidade, a
            lombar é uma área vulnerável a tensões e lesões. Este pacote inclui
            exercícios e orientações específicos para fortalecer e estabilizar a
            região lombar, promovendo alívio de dores e maior resistência para
            atividades diárias.
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

export default Lombar;
