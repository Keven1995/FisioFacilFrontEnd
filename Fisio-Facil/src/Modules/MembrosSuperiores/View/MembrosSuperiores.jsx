import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Superiores.css";

const MembrosSuperiores = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="membros-superiores-container">
      <div className="membros-title">MEMBROS SUPERIORES</div>
      <div className="membros-buttons-container">
        <div className="membros-button" onClick={() => handleClick("/login")}>
          OMBRO
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          COTOVELO
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          PUNHO
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          MÃO
        </div>
      </div>
    </div>
  );
};

export default MembrosSuperiores;