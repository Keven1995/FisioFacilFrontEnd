import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../ColunaVertebral/View/membros/Styles/Membro.css";
import Maoimg from "../../View/img/mao.jpeg";

const Mao = () => {

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">MEMBROS SUPERIORES</h1>
      <h2 className="member-subtitle">Mão</h2>
      <div className="membro-card">
        <img src={Maoimg} alt="Mao" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            A mão é uma estrutura complexa e altamente funcional que permite uma
            ampla variedade de movimentos, como agarrar, segurar, empurrar e
            realizar tarefas delicadas e precisas. Essencial para interações com
            o ambiente, a mão humana possui características únicas que
            contribuem para sua destreza, precisão e força.
          </p>

          <div className="plan-buttons">
            <button className="btn btn-outline-success" onClick={() => handleClick("/planoBasico/:membro")}>Básico</button>
            <button className="btn btn-outline-success" onClick={() => handleClick("/planoIntermediario/:membro")}>Intermediário</button>
            <button className="btn btn-outline-success" onClick={() => handleClick("/planoPlus/:membro")}>Plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mao;
