import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Joelhoimg from "../membros/img/joelho.jpeg";

const Joelho = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS INFERIORES</h1>
      <h2 className="member-subtitle">Joelho</h2>
      <div className="membro-card">
        <img src={Joelhoimg} alt="Joelho" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O joelho é uma das articulações mais complexas e importantes do
            corpo humano, responsável por suportar o peso do corpo e permitir
            movimentos fundamentais como caminhar, correr, agachar e saltar.
            Composto pela articulação entre o fêmur, a tíbia e a patela (ou
            rótula), o joelho é estabilizado por ligamentos e músculos que
            trabalham juntos para proporcionar tanto flexibilidade quanto
            estabilidade.
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

export default Joelho;
