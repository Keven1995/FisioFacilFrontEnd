import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Exercicio.css";

const CervicalExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);

  const exercises = [
    {
      title: "Exercício 1: Flexão de Cervical",
      description: "Este exercício consiste em movimentar o pescoço para frente, alongando a cervical.",
      video: "https://via.placeholder.com/150", // Coloque a URL do vídeo aqui
    },
    {
      title: "Exercício 2: Extensão de Cervical",
      description: "Movimento para trás do pescoço, promovendo a extensão da cervical.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 3: Rotação de Cervical",
      description: "Rotacione lentamente o pescoço para um lado e depois para o outro.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 4: Inclinação Lateral",
      description: "Incline a cabeça lateralmente, como se tentasse tocar o ombro.",
      video: "https://via.placeholder.com/150",
    },
    {
      title: "Exercício 5: Elevação de Ombros",
      description: "Eleve os ombros para aliviar tensões na cervical.",
      video: "https://via.placeholder.com/150",
    },
  ];

  const redirectToStretches = () => {
    // Navega para a página de exercicios
    window.location.href = "/exercicios";
  };

  const redirectToExercise = (exerciseTitle) => {
    // Navega para a página do exercício
    console.log(`Redirecionar para a página de: ${exerciseTitle}`);
  };

  return (
    <div className="exercicios-container container">
      <h2 className="text-center mb-4">Cervical</h2>
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

export default CervicalExercicio;
