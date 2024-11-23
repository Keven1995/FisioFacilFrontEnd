import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Planos.css";

const Planos = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container-planos text-center">
      <h1 className="planos-title">Planos</h1>

      <div className="d-flex justify-content-around flex-wrap">
        <div className="planos-card" onClick={() => handleClick("/planoBasico/:membro")}>
          Básico
        </div>

        <div
          className="planos-card"
          onClick={() => handleClick("/planoIntermediario/:membro")}
        >
          Intermediário
        </div>

        <div className="planos-card" onClick={() => handleClick("/planoPlus/:membro")}>
          Plus
        </div>
      </div>
    </div>
  );
};

export default Planos;
