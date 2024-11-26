import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../Styles/Servicos.css";
import colunaVertebralImg from "../../../assets/img/colunaVertebral.jpg";
import Inferiores from "../../../assets/img/inferiores.jpg";
import Superiores from "../../../assets/img/superiores.jpg";

const Servicos = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState({
    superiores: false,
    colunaVertebral: false,
    inferiores: false,
  });

  const handleClick = (path) => {
    navigate(path);
  };

  const handleImageLoad = (key) => {
    setIsLoaded((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const placeholders = {
    superiores: (
      <div className="skeleton service-card-img"></div>
    ),
    colunaVertebral: (
      <div className="skeleton service-card-img"></div>
    ),
    inferiores: (
      <div className="skeleton service-card-img"></div>
    ),
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
            {!isLoaded.superiores && placeholders.superiores}
            <img
              src={Superiores}
              alt="Membros Superiores"
              className={`service-card-img ${isLoaded.superiores ? "" : "d-none"}`}
              loading="lazy"
              onLoad={() => handleImageLoad("superiores")}
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
            {!isLoaded.colunaVertebral && placeholders.colunaVertebral}
            <img
              src={colunaVertebralImg}
              alt="Coluna Vertebral"
              className={`service-card-img ${isLoaded.colunaVertebral ? "" : "d-none"}`}
              loading="lazy"
              onLoad={() => handleImageLoad("colunaVertebral")}
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
            {!isLoaded.inferiores && placeholders.inferiores}
            <img
              src={Inferiores}
              alt="Membros Inferiores"
              className={`service-card-img ${isLoaded.inferiores ? "" : "d-none"}`}
              loading="lazy"
              onLoad={() => handleImageLoad("inferiores")}
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
