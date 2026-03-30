import { useMemo } from "react";

const PLAN_LIMITS = Object.freeze({
  basico: 3,
  intermediario: 5,
});

export const useFilteredExercises = (exercises, plan) =>
  useMemo(() => {
    const limit = PLAN_LIMITS[plan];
    return limit ? exercises.slice(0, limit) : exercises;
  }, [exercises, plan]);

