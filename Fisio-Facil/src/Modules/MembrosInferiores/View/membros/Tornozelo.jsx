import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Tornozeloimg from "../membros/img/tornozelo.jpeg";

const Tornozelo = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS INFERIORES</h1>
      <h2 className="member-subtitle">Tornozelo</h2>
      <div className="membro-card">
        <img src={Tornozeloimg} alt="Tornozelo" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O tornozelo é uma articulação essencial para a mobilidade do corpo,
            conectando a perna ao pé e permitindo uma ampla gama de movimentos,
            como flexão, extensão, rotação e inclinação lateral. Sua estrutura
            robusta, composta por ossos, ligamentos, tendões e músculos, é
            projetada para suportar o peso do corpo e absorver os impactos
            durante atividades como caminhar, correr e saltar.
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

export default Tornozelo;
