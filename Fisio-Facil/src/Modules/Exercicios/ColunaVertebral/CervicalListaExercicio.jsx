import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Exercicio.css";

const CervicalListaExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { membro } = useParams(); // Captura o membro da URL

  const exercises = [
    {
      title: "Exercício 1: Flexão de Cervical",
      description: "Movimente o pescoço para frente, alongando a cervical.",
      video: "https://via.placeholder.com/150",
      link: `/membros/${membro}/exercicio-flexao-cervical`,
    },
    {
      title: "Exercício 2: Extensão de Cervical",
      description: "Movimento para trás do pescoço, promovendo a extensão da cervical.",
      video: "https://via.placeholder.com/150",
      link: `/membros/${membro}/exercicio-extensao-cervical`,
    },
    {
      title: "Exercício 3: Rotação de Cervical",
      description: "Rotacione lentamente o pescoço para um lado e depois para o outro.",
      video: "https://via.placeholder.com/150",
      link: `/membros/${membro}/exercicio-rotacao-cervical`,
    },
    {
      title: "Exercício 4: Inclinação Lateral",
      description: "Incline a cabeça lateralmente, como se tentasse tocar o ombro.",
      video: "https://via.placeholder.com/150",
      link: `/membros/${membro}/exercicio-inclinacao-lateral`,
    },
    {
      title: "Exercício 5: Elevação de Ombros",
      description: "Eleve os ombros para aliviar tensões na cervical.",
      video: "https://via.placeholder.com/150",
      link: `/membros/${membro}/exercicio-elevacao-ombros`,
    },
  ];

  // Filtrar exercícios com base no plano
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const plano = query.get("plano");

    let filtered;
    if (plano === "basico") {
      filtered = exercises.slice(0, 3); // 3 primeiros exercícios
    } else if (plano === "intermediario") {
      filtered = exercises.slice(0, 5); // 5 primeiros exercícios
    } else {
      filtered = exercises; // Todos os exercícios para o plano "Plus"
    }

    setFilteredExercises(filtered);
  }, [location.search]);

  const redirectToExercise = (exerciseLink) => {
    navigate(exerciseLink);
  };

  return (
    <div className="exercicios-container container">
      <h2 className="text-center mb-4">{membro.toUpperCase()}</h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowExercises(!showExercises)}
          aria-expanded={showExercises}
        >
          {showExercises ? "Esconder Exercícios" : "Exibir Exercícios"}
        </button>
      </div>

      {showExercises && (
        <div>
          <h4>Lista de Exercícios</h4>
          <div className="accordion" id="exercisesAccordion">
            {filteredExercises.map((exercise, index) => (
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
                        onClick={() => redirectToExercise(exercise.link)}
                      >
                        Ir para Exercício
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

export default CervicalListaExercicio;
