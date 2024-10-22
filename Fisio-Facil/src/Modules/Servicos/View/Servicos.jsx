import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Usuarios/View/Login.css";
import colunaVertebralImg from "/src/assets/colunaVertebral.jpg";
import Inferiores from "/src/assets/Inferiores.jpg";
import Superiores from "/src/assets/Superiores.jpg";

const Servicos = () => {
  const navigate = useNavigate();
  

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-5" style={{ fontFamily: "Arial", fontWeight: "bold" }}>
        FisioFacil
      </h1>

      {/* Usando Flexbox do Bootstrap para os cards */}
      <div className="row justify-content-center">
        {/* Card 1 - Membros Superiores */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card p-3"
            style={{
              backgroundColor: "#a0e57b",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleClick("/MembrosSuperiores")}
            //onClick={() => handleClick("/login")}
          >
            <img
              src={Superiores}
              alt="Membros Superiores"
              className="card-img-top"
              style={{
                borderRadius: "15px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">MEMBROS SUPERIORES</h5>
            </div>
          </div>
        </div>

        {/* Card 3 - Coluna Vertebral */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card p-3"
            style={{
              backgroundColor: "#a0e57b",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleClick("/ColunaVertebral")}
            //onClick={() => handleClick("/login")}
          >
            <img
              src={colunaVertebralImg}
              alt="Coluna Vertebral"
              className="card-img-top"
              style={{
                borderRadius: "15px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">COLUNA VERTEBRAL</h5>
            </div>
          </div>
        </div>

        {/* Card 2 - Membros Inferiores */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="card p-3"
            style={{
              backgroundColor: "#a0e57b",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleClick("/MembrosInferiores")}
            //onClick={() => handleClick("/login")}
          >
            <img
              src={Inferiores}
              alt="Membros Inferiores"
              className="card-img-top"
              style={{
                borderRadius: "15px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">MEMBROS INFERIORES</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
