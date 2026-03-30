import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Servicos.css";
import colunaVertebralDesktopImg from "../../../assets/img/optimized/colunaVertebral-desktop.jpg";
import colunaVertebralMobileImg from "../../../assets/img/optimized/colunaVertebral-mobile.jpg";
import inferioresDesktopImg from "../../../assets/img/optimized/inferiores-desktop.jpg";
import inferioresMobileImg from "../../../assets/img/optimized/inferiores-mobile.jpg";
const superioresDesktopImg = "/images/superiores-desktop.jpg";
const superioresMobileImg = "/images/superiores-mobile.jpg";

const serviceItems = [
  {
    id: "superiores",
    title: "MEMBROS SUPERIORES",
    image: superioresDesktopImg,
    srcSet: `${superioresMobileImg} 640w, ${superioresDesktopImg} 1200w`,
    alt: "Tratamento para membros superiores",
    path: "/MembrosSuperiores",
  },
  {
    id: "colunaVertebral",
    title: "COLUNA VERTEBRAL",
    image: colunaVertebralDesktopImg,
    srcSet: `${colunaVertebralMobileImg} 640w, ${colunaVertebralDesktopImg} 1200w`,
    alt: "Tratamento para coluna vertebral",
    path: "/ColunaVertebral",
  },
  {
    id: "inferiores",
    title: "MEMBROS INFERIORES",
    image: inferioresDesktopImg,
    srcSet: `${inferioresMobileImg} 640w, ${inferioresDesktopImg} 1200w`,
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
                  srcSet={service.srcSet}
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 32vw"
                  alt={service.alt}
                  className={`service-card-img ${loadedImages[service.id] ? "" : "d-none"}`}
                  loading={service.id === "superiores" ? "eager" : "lazy"}
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



