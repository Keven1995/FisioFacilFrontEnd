import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Inferiores.css";
import { useAuth } from "../../../Context/AuthProvider.jsx";

const MembrosInferiores = () => {
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
    <div className="membros-inferiores-container">
      <div className="membros-title">MEMBROS INFERIORES</div>
      <div className="membros-buttons-container">
        {["QUADRIL", "JOELHO", "TORNOZELO", "PÉ"].map((section) => (
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

export default MembrosInferiores;
