import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ExercicioSecao/Styles/ExercicioSecao.css";


const FlexaoCervical = () => {
  const [layout, setLayout] = useState(1);

  const videoSrc = "https://via.placeholder.com/640x360"; // Substitua pelo link do vídeo real
  const images = [
    {
      src: "https://via.placeholder.com/200",
      description: "Descrição da imagem 1",
    },
    {
      src: "https://via.placeholder.com/200",
      description: "Descrição da imagem 2",
    },
    {
      src: "https://via.placeholder.com/200",
      description: "Descrição da imagem 3",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Exercícios para Cervical</h1>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className="btn btn-primary"
          onClick={() => setLayout(1)}
          disabled={layout === 1}
        >
          Layout 1
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setLayout(2)}
          disabled={layout === 2}
        >
          Layout 2
        </button>
      </div>

      {layout === 1 && (
        <div>
          <div className="mb-4">
            <video src={videoSrc} controls className="w-100 mb-3" />
            <p>Descrição do vídeo: Este vídeo mostra exercícios para a região cervical.</p>
          </div>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img src={image.src} alt={`Imagem ${index + 1}`} className="img-fluid" />
                <p className="mt-2">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {layout === 2 && (
        <div className="d-flex flex-column flex-lg-row gap-4">
          <div className="flex-shrink-0">
            <video src={videoSrc} controls className="w-100 mb-3" />
            <p>Descrição do vídeo: Este vídeo mostra exercícios para a região cervical.</p>
          </div>
          <div className="flex-grow-1">
            <div>
              <img src={images[0].src} alt="Imagem 1" className="img-fluid mb-2" />
              <p>{images[0].description}</p>
            </div>
            <div className="row">
              {images.slice(1).map((image, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <img src={image.src} alt={`Imagem ${index + 2}`} className="img-fluid" />
                  <p className="mt-2">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlexaoCervical;
