import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Planos.css";

const Planos = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container-planos container text-center mt-5">
      <h1 className="planos-title mb-5" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        Planos
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
          onClick={() => handleClick("/planoBasico")}
        >
          Básico
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
          onClick={() => handleClick("/planoIntermediario")}
        >
          INTERMEDIÁRIO
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
          onClick={() => handleClick("/planoPlus")}
        >
          PLUS
        </div>
      </div>
    </div>
  );
};

export default Planos;
