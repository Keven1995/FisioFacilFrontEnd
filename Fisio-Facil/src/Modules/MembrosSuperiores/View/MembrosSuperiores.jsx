import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Superiores.css";
import { useAuth } from "../../../Context/AuthProvider.jsx";

const MembrosSuperiores = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = (section) => {
    if (isAuthenticated) {
      navigate(`/${section.toLowerCase()}`);
    } else {
      navigate("/login", { state: { from: `/${section.toLowerCase()}` } });
    }
  };

  return (
    <div className="membros-superiores-container">
      <div className="membros-title">MEMBROS SUPERIORES</div>
      <div className="membros-buttons-container">
        {["OMBRO", "COTOVELO", "PUNHO", "MÃO"].map((section) => (
          <div
            key={section}
            className="membros-button"
            onClick={() => handleClick(section)}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembrosSuperiores;
