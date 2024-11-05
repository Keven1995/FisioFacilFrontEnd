import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Coluna.css";

const ColunaVertebral = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path, { state: { from: "/ColunaVertebral" } });
  };

  return (
    <div className="coluna-vertebral-container">
      <div className="coluna-title">COLUNA VERTEBRAL</div>
      <div className="coluna-buttons-container">
        {["CERVICAL", "TORÁCICA", "LOMBAR", "SACRAL"].map((section) => (
          <div
            key={section}
            className="coluna-button"
            onClick={() => handleClick("/login")}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColunaVertebral;