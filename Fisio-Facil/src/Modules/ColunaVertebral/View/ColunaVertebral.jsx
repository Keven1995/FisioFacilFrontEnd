import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Coluna.css";
import { useAuth } from "../../../Context/AuthProvider.jsx";

const ColunaVertebral = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = (section) => {
    const routesMap = {
      CERVICAL: "coluna-vertebral/cervical",
      TORACICA: "coluna-vertebral/toracica",
      LOMBAR: "coluna-vertebral/lombar",
      SACRAL: "coluna-vertebral/sacral",
    };

    if (isAuthenticated) {
      navigate(`/${routesMap[section]}`);
    } else {
      navigate("/login", { state: { from: `/${routesMap[section]}` } });
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
