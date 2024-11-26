import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Membro.css";
import Cervicalimg from "../img/cervical.jpg";

const Cervical = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="member-page-container">
      <h1 className="category-title">COLUNA VERTEBRAL</h1>
      <h2 className="member-subtitle">Cervical</h2>

      <div className="membro-card">
        {!isLoaded && <div className="skeleton membro-image"></div>}
        <img
          src={Cervicalimg}
          alt="Cervical"
          className={`membro-image ${isLoaded ? "loaded" : ""}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
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
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoBasico/cervical")}
              aria-label="Escolher plano básico para cervical"
            >
              Básico
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoIntermediario/cervical")}
              aria-label="Escolher plano intermediário para cervical"
            >
              Intermediário
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => handleClick("/planoPlus/cervical")}
              aria-label="Escolher plano plus para cervical"
            >
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cervical;
