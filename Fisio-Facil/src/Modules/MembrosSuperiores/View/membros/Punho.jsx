import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Punhoimg from "../../View/img/punho.jpeg";

const Punho = () => {
  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS SUPERIORES</h1>
      <h2 className="member-subtitle">Punho</h2>
      <div className="membro-card">
        <img src={Punhoimg} alt="Punho" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            O punho é uma articulação complexa que conecta a mão ao antebraço e
            permite uma ampla gama de movimentos, como flexão, extensão, desvio
            lateral e rotação. Além de proporcionar flexibilidade, o punho é
            essencial para a força e estabilidade das mãos, permitindo que
            desempenhem funções delicadas e potentes, como pegar, segurar e
            manipular objetos.
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

export default Punho;
