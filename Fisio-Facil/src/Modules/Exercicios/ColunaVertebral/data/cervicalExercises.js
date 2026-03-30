export const CERVICAL_EXERCISES = [
  {
    id: "flexao-cervical",
    title: "Exercicio 1: Flexao de Cervical",
    description: "Movimente o pescoco para frente, alongando a cervical.",
    video: "https://via.placeholder.com/150",
    pathSuffix: "exercicio-flexao-cervical",
  },
  {
    id: "extensao-cervical",
    title: "Exercicio 2: Extensao de Cervical",
    description: "Movimento para tras do pescoco, promovendo a extensao da cervical.",
    video: "https://via.placeholder.com/150",
    pathSuffix: "exercicio-extensao-cervical",
  },
  {
    id: "rotacao-cervical",
    title: "Exercicio 3: Rotacao de Cervical",
    description: "Rotacione lentamente o pescoco para um lado e depois para o outro.",
    video: "https://via.placeholder.com/150",
    pathSuffix: "exercicio-rotacao-cervical",
  },
  {
    id: "inclinacao-lateral",
    title: "Exercicio 4: Inclinacao Lateral",
    description: "Incline a cabeca lateralmente, como se tentasse tocar o ombro.",
    video: "https://via.placeholder.com/150",
    pathSuffix: "exercicio-inclinacao-lateral",
  },
  {
    id: "elevacao-ombros",
    title: "Exercicio 5: Elevacao de Ombros",
    description: "Eleve os ombros para aliviar tensoes na cervical.",
    video: "https://via.placeholder.com/150",
    pathSuffix: "exercicio-elevacao-ombros",
  },
];

export const buildExerciseLink = (membro, pathSuffix) =>
  `/membros/${membro}/${pathSuffix}`;

