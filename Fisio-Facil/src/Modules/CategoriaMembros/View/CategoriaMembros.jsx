import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Usuarios/View/Login.css";

const CategoriaMembros = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-5" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        FisioFacil
      </h1>

      <div className="d-flex justify-content-around flex-wrap">
        <div
          className="card p-5"
          style={{
            width: "200px",
            backgroundColor: "#a0e57b",
            borderRadius: "20px",
            cursor: "pointer",
            textAlign: "center",
            margin: "10px",
          }}
          onClick={() => handleClick("/MembrosSuperiores")}
        >
          MEMBRO SUPERIOR
        </div>

        <div
          className="card p-5"
          style={{
            width: "200px",
            backgroundColor: "#a0e57b",
            borderRadius: "20px",
            cursor: "pointer",
            textAlign: "center",
            margin: "10px",
          }}
          onClick={() => handleClick("/MembrosInferiores")}
        >
          MEMBRO INFERIOR
        </div>

        <div
          className="card p-5"
          style={{
            width: "200px",
            backgroundColor: "#a0e57b",
            borderRadius: "20px",
            cursor: "pointer",
            textAlign: "center",
            margin: "10px",
          }}
          onClick={() => handleClick("/ColunaVertebral")}
        >
          COLUNA VERTEBRAL
        </div>
      </div>
    </div>
  );
};

export default CategoriaMembros;
