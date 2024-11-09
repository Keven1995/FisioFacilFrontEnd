import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Exercicio.css";

const LombarExercicio = () => {

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

  
    return <div className="exercicios-container">LombarExercicio</div>;
  };
  
  export default LombarExercicio;
  