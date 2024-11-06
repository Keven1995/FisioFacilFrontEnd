import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Membro.css";
import Cervicalimg from "../membros/img/cervical.jpg";

const Cervical = () => {
  return (
    <div className="member-page-container">
      <h1 className="category-title">COLUNA VERTEBRAL</h1>
      <h2 className="member-subtitle">Cervical</h2>
      <div className="membro-card">
        <img src={Cervicalimg} alt="Cervical" className="membro-image" />
      </div>

      <div className="member-card card shadow">
        <div className="card-body">
          <p className="member-description">
            A região cervical sustenta a cabeça e permite uma grande amplitude
            de movimentos no pescoço. Este pacote oferece exercícios específicos
            e orientações para fortalecer a cervical, promovendo estabilidade e
            prevenindo dores.
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

export default Cervical;
