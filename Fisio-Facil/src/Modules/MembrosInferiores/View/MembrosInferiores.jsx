import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Inferiores.css";
import { useAuth } from "../../../Context/AuthProvider.jsx"; // Ajuste o caminho conforme necessário

const MembrosInferiores = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Pega o estado de autenticação

  const handleClick = (section) => {
    if (isAuthenticated) {
      // Se o usuário estiver autenticado, navega diretamente para a página do membro
      navigate(`/${section.toLowerCase()}`);
    } else {
      // Se não estiver autenticado, navega para a página de login e passa a informação da página anterior
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
