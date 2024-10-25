import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Usuarios/View/Styles/Login.css";

const MembrosInferiores = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
        <div
          className="text-center"
          style={{
            backgroundColor: "#d4f1a1",
            color: "#000000",
            borderRadius: "20px",
            cursor: "pointer",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          MEMBROS INFERIORES
        </div>
      <div className="container text-center mt-5">

        {/* Lista dos membros */}
        <div className="d-flex flex-column align-items-center">
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/joelho")}
          >
            QUADRL
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/joelho")}
          >
            JOELHO
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/tornozelo")}
          >
            TORNOZELO
          </div>
          <div
            className="card mb-3"
            style={{
              width: "250px",
              backgroundColor: "#d4f1a1",
              borderRadius: "20px",
              cursor: "pointer",
              padding: "15px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            onClick={() => handleClick("/pe")}
          >
            PÉ
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembrosInferiores;
