import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Superiores.css";
import { useAuth } from "../../../Context/AuthProvider.jsx"; // Ajuste o caminho conforme necessário

const MembrosSuperiores = () => {
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
