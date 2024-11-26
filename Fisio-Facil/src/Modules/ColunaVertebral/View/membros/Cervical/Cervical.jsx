import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Membro.css";
import Cervicalimg from "../img/cervical.jpg";

const Cervical = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = (path) => {
    window.location.href = path;
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
          className={`membro-image ${isLoaded ? "" : "d-none"}`}
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

export default Cervical;
