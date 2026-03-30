import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Exercicio.css";
import {
  buildExerciseLink,
  CERVICAL_EXERCISES,
} from "./data/cervicalExercises";
import { useFilteredExercises } from "./hooks/useFilteredExercises";

const CervicalListaExercicio = () => {
  const [showExercises, setShowExercises] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { membro } = useParams();

  const plan = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("plano");
  }, [location.search]);

  const exercisesWithLinks = useMemo(
    () =>
      CERVICAL_EXERCISES.map((exercise) => ({
        ...exercise,
        link: buildExerciseLink(membro, exercise.pathSuffix),
      })),
    [membro]
  );

  const filteredExercises = useFilteredExercises(exercisesWithLinks, plan);

  const redirectToExercise = (exerciseLink) => {
    navigate(exerciseLink);
  };

  return (
    <div className="exercicios-container container">
      <h2 className="text-center mb-4">
        {membro ? membro.toUpperCase() : "Membro nao identificado"}
      </h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowExercises(!showExercises)}
          aria-expanded={showExercises}
        >
          {showExercises ? "Esconder Exercicios" : "Exibir Exercicios"}
        </button>
      </div>

      {showExercises && (
        <div>
          <h4>Lista de Exercicios</h4>
          <div className="accordion" id="exercisesAccordion">
            {filteredExercises.map((exercise) => (
              <div className="accordion-item" key={exercise.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${exercise.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${exercise.id}`}
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
                  id={`collapse-${exercise.id}`}
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
                        Ir para Exercicio
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

