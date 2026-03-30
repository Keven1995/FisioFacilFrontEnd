import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Servicos.css";
import colunaVertebralImg from "../../../assets/img/colunaVertebral.jpg";
import inferioresImg from "../../../assets/img/inferiores.jpg";
import superioresImg from "../../../assets/img/superiores.jpg";

const serviceItems = [
  {
    id: "superiores",
    title: "MEMBROS SUPERIORES",
    image: superioresImg,
    alt: "Tratamento para membros superiores",
    path: "/MembrosSuperiores",
  },
  {
    id: "colunaVertebral",
    title: "COLUNA VERTEBRAL",
    image: colunaVertebralImg,
    alt: "Tratamento para coluna vertebral",
    path: "/ColunaVertebral",
  },
  {
    id: "inferiores",
    title: "MEMBROS INFERIORES",
    image: inferioresImg,
    alt: "Tratamento para membros inferiores",
    path: "/MembrosInferiores",
  },
];

const Servicos = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({
    superiores: false,
    colunaVertebral: false,
    inferiores: false,
  });

  const handleImageLoad = (key) => {
    setLoadedImages((previousState) => ({
      ...previousState,
      [key]: true,
    }));
  };

  return (
    <section className="servicos-page" aria-labelledby="servicos-title">
      <div className="container-servicos">
        <h1 id="servicos-title" className="servicos-title text-center">
          Nossos Servicos
        </h1>

        <div className="row g-4 justify-content-center">
          {serviceItems.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 d-flex">
              <button
                type="button"
                className="service-card"
                onClick={() => navigate(service.path)}
                aria-label={`Abrir categoria ${service.title}`}
              >
                {!loadedImages[service.id] && (
                  <div className="skeleton service-card-img" aria-hidden="true" />
                )}

                <img
                  src={service.image}
                  alt={service.alt}
                  className={`service-card-img ${loadedImages[service.id] ? "" : "d-none"}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(service.id)}
                />

                <span className="service-card-title">{service.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
