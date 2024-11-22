import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Coluna.css";
import { useAuth } from "../../../Context/AuthProvider.jsx";

const ColunaVertebral = () => {
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
    <div className="coluna-vertebral-container">
      <div className="coluna-title">COLUNA VERTEBRAL</div>
      <div className="coluna-buttons-container">
        {["CERVICAL", "TORACICA", "LOMBAR", "SACRAL"].map((section) => (
          <div
            key={section}
            className="coluna-button"
            onClick={() => handleClick(section)}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColunaVertebral;
