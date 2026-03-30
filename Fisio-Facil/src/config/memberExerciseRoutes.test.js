import { buildExercisePath } from "./memberExerciseRoutes.js";

describe("buildExercisePath", () => {
  it("deve montar rota especifica de cervical com query de plano", () => {
    expect(buildExercisePath("cervical", "basico")).toBe("/membros/cervical/lista-exercicios?plano=basico");
  });

  it("deve montar rota padrao para outros membros", () => {
    expect(buildExercisePath("joelho", "plus")).toBe("/membros/joelho/exercicios?plano=plus");
  });
});
