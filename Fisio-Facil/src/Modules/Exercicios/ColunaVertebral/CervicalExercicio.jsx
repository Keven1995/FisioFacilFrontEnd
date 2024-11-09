import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Exercicio.css";

const CervicalExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);
  const [showStretches, setShowStretches] = useState(false);

  const exercises = [
    "Exercício 1: Flexão de Cervical",
    "Exercício 2: Extensão de Cervical",
    "Exercício 3: Rotação de Cervical",
    "Exercício 4: Inclinação Lateral",
    "Exercício 5: Elevação de Ombros",
  ];

  const stretches = [
    "Alongamento 1: Pescoço para o Lado",
    "Alongamento 2: Inclinação para Frente",
    "Alongamento 3: Rotação Lenta",
    "Alongamento 4: Alongamento de Trapézio",
    "Alongamento 5: Alongamento de Escaleno",
  ];

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
        <button
          className="btn btn-secondary"
          onClick={() => setShowStretches(!showStretches)}
          aria-expanded={showStretches}
        >
          Alongamentos
        </button>
      </div>

      {showExercises && (
        <div className="collapse show">
          <h4>Lista de Exercícios</h4>
          <ul className="list-group mb-3">
            {exercises.map((exercise, index) => (
              <li className="list-group-item" key={index}>
                {exercise}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showStretches && (
        <div className="collapse show">
          <h4>Lista de Alongamentos</h4>
          <ul className="list-group mb-3">
            {stretches.map((stretch, index) => (
              <li className="list-group-item" key={index}>
                {stretch}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CervicalExercicio;
