import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Exercicio.css";

const LombarExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);

  const exercises = [
    {
      title: "Exercício 1: Flexão Lombar",
      description: "Movimento de flexão para frente para fortalecer a lombar.",
      video: "https://via.placeholder.com/150", // Substitua pela URL real do vídeo
    },
    {
      title: "Exercício 2: Extensão Lombar",
      description: "Exercício para estender a lombar e aliviar tensões.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 3: Rotação Lombar",
      description: "Rotação do tronco para um lado e depois para o outro, mantendo os quadris fixos.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 4: Inclinação Lateral Lombar",
      description: "Incline o tronco lateralmente para fortalecer os músculos laterais.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 5: Ponte para Lombar",
      description: "Exercício de elevação do quadril para fortalecer a região lombar.",
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
      <h2 className="text-center mb-4">Lombar</h2>
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

export default LombarExercicio;
