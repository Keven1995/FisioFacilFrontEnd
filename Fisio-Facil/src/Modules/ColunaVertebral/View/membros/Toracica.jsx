import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Membro.css";
import Toracicaimg from "../membros/img/toracica.jpg";

const Toracica = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">COLUNA VERTEBRAL</h1>
      <h2 className="member-subtitle">Torácica</h2>
      <div className="membro-card">
        <img src={Toracicaimg} alt="Toracica" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            A região torácica é responsável por sustentar a parte superior do
            tronco e é composta por 12 vértebras conectadas às costelas. Esse
            pacote oferece exercícios e orientações específicas para fortalecer
            essa área e prevenir dores.
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

export default Toracica;
