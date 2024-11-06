import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Cotoveloimg from "../../View/img/cotovelo.jpeg";

const Cotovelo = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS SUPERIORES</h1>
      <h2 className="member-subtitle">Cotovelo</h2>
      <div className="membro-card">
        <img src={Cotoveloimg} alt="Cotovelo" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O cotovelo é uma articulação fundamental para a movimentação dos
            braços, pois conecta o braço superior (um dos ossos principais, o
            úmero) ao antebraço (formado pelos ossos rádio e ulna). A função
            principal do cotovelo é permitir a flexão e extensão do braço,
            facilitando o alcance e a realização de diversas tarefas, como
            pegar, empurrar, carregar e fazer movimentos de precisão.
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

export default Cotovelo;
