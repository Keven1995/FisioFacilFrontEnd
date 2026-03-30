import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useImagePreload } from "../../../../../hooks/useImagePreload.js";
import "../Styles/Membro.css";

const SpineMemberTemplate = ({
  memberSlug,
  memberName,
  description,
  imageDesktop,
  imageMobile,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const responsiveSrcSet = `${imageMobile} 520w, ${imageDesktop} 900w`;

  useImagePreload({
    href: imageDesktop,
    srcSet: responsiveSrcSet,
    sizes: "(max-width: 768px) 92vw, 420px",
  });

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="cervical-page" aria-labelledby={`${memberSlug}-title`}>
      <div className="cervical-content">
        <header className="cervical-header">
          <p className="cervical-eyebrow">Coluna Vertebral</p>
          <h1 id={`${memberSlug}-title`} className="cervical-title">
            Cuidados para a Regiao {memberName}
          </h1>
          <p className="cervical-subtitle">
            Exercicios orientados para aliviar dores, melhorar mobilidade e
            fortalecer a postura com seguranca no dia a dia.
          </p>
        </header>

        <div className="cervical-grid">
          <article className="cervical-media-card" aria-label={`Imagem da regiao ${memberName}`}>
            {!isLoaded && <div className="skeleton cervical-image" aria-hidden="true" />}
            <img
              src={imageDesktop}
              srcSet={responsiveSrcSet}
              sizes="(max-width: 768px) 92vw, 420px"
              alt={`Representacao da regiao ${memberName}`}
              className={`cervical-image ${isLoaded ? "loaded" : "d-none"}`}
              loading="eager"
              onLoad={handleImageLoad}
            />
          </article>

          <article className="cervical-info-card">
            <h2 className="cervical-info-title">Escolha seu plano</h2>
            <p className="cervical-description">{description}</p>

            <div className="cervical-plan-buttons" role="group" aria-label={`Planos disponiveis para ${memberName}`}>
              <button
                className="cervical-plan-btn cervical-plan-btn--primary"
                onClick={() => navigate(`/planoBasico/${memberSlug}`)}
                aria-label={`Escolher plano basico para ${memberName}`}
              >
                Basico
              </button>
              <button
                className="cervical-plan-btn"
                onClick={() => navigate(`/planoIntermediario/${memberSlug}`)}
                aria-label={`Escolher plano intermediario para ${memberName}`}
              >
                Intermediario
              </button>
              <button
                className="cervical-plan-btn"
                onClick={() => navigate(`/planoPlus/${memberSlug}`)}
                aria-label={`Escolher plano plus para ${memberName}`}
              >
                Plus
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SpineMemberTemplate;

