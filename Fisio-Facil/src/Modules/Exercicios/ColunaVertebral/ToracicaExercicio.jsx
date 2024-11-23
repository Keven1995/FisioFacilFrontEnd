import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Exercicio.css";

const ToracicaExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);

  const exercises = [
    {
      title: "Exercício 1: Rotação Torácica",
      description: "Movimento de rotação do tronco para melhorar a mobilidade torácica.",
      video: "https://via.placeholder.com/150", // Substitua pela URL real do vídeo
    },
    {
      title: "Exercício 2: Extensão Torácica",
      description: "Exercício para estender a região torácica, aliviando tensões.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 3: Mobilização com Foam Roller",
      description: "Utilize o foam roller para mobilizar a coluna torácica.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 4: Alongamento em Y",
      description: "Alongamento em forma de Y para abrir o peitoral e aliviar a coluna torácica.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 5: Postura de Gato e Vaca",
      description: "Movimento para melhorar a mobilidade da coluna torácica e lombar.",
      video: "https://via.placeholder.com/150",
    },
  ];

  const redirectToStretches = () => {
    window.location.href = "/exercicios";
  };

  const redirectToExercise = (exerciseTitle) => {
    console.log(`Redirecionar para a página de: ${exerciseTitle}`);
  };

  return (
    <div className="exercicios-container container">
      <h2 className="text-center mb-4">Torácica</h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowExercises(!showExercises)}
          aria-expanded={showExercises}
        >
          Exercícios
        </button>
      </div>

      {showExercises && (
        <div>
          <h4>Lista de Exercícios</h4>
          <div className="accordion" id="exercisesAccordion">
            {exercises.map((exercise, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    <span
                      className="exercise-title"
                      onClick={() => redirectToExercise(exercise.title)}
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      {exercise.title}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#exercisesAccordion"
                >
                  <div className="accordion-body d-flex gap-3">
                    <video
                      src={exercise.video}
                      controls
                      width="150"
                      className="flex-shrink-0"
                    />
                    <div>
                      <p>{exercise.description}</p>
                      <button
                        className="btn btn-secondary"
                        onClick={redirectToStretches}
                      >
                        Exercicios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToracicaExercicio;
