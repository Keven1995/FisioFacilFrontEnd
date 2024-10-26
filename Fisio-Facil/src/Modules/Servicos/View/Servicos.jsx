import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Servicos.css";
import colunaVertebralImg from "../../../assets/img/colunaVertebral.jpg";
import Inferiores from "../../../assets/img/inferiores.jpg";
import Superiores from "../../../assets/img/superiores.jpg";

const Servicos = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container-servicos text-center mt-5">
      <h1 className="servicos-title">Nossos Serviços</h1>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="service-card"
            onClick={() => handleClick("/MembrosSuperiores")}
          >
            <img
              src={Superiores}
              alt="Membros Superiores"
              className="service-card-img"
            />
            <div className="card-body">
              <h5 className="service-card-title">MEMBROS SUPERIORES</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="service-card"
            onClick={() => handleClick("/ColunaVertebral")}
          >
            <img
              src={colunaVertebralImg}
              alt="Coluna Vertebral"
              className="service-card-img"
            />
            <div className="card-body">
              <h5 className="service-card-title">COLUNA VERTEBRAL</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className="service-card"
            onClick={() => handleClick("/MembrosInferiores")}
          >
            <img
              src={Inferiores}
              alt="Membros Inferiores"
              className="service-card-img"
            />
            <div className="card-body">
              <h5 className="service-card-title">MEMBROS INFERIORES</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
