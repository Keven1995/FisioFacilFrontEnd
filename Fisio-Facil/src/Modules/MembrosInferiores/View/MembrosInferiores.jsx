import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Inferiores.css";

const MembrosInferiores = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="membros-inferiores-container">
      <div className="membros-title">MEMBROS INFERIORES</div>
      <div className="membros-buttons-container">

        {/* Lista dos membros */}
        <div className="membros-button" onClick={() => handleClick("/login")}>
          QUADRIL
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          JOELHO
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          TORNOZELO
        </div>
        <div className="membros-button" onClick={() => handleClick("/login")}>
          PÉ
        </div>
      </div>
    </div>
  );
};

export default MembrosInferiores;
