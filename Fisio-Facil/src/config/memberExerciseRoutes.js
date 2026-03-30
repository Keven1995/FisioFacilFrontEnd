const normalizeSlug = (value) => (value || "").trim().toLowerCase();

const resolvePathByMember = (memberSlug) => {
  const slug = normalizeSlug(memberSlug);

  if (!slug) {
    return "/servicos";
  }

  if (slug === "cervical") {
    return "/membros/cervical/lista-exercicios";
  }

  return `/membros/${slug}/exercicios`;
};

export const buildExercisePath = (memberSlug, planName) => {
  const basePath = resolvePathByMember(memberSlug);
  const normalizedPlan = (planName || "").trim().toLowerCase();

  if (!normalizedPlan) {
    return basePath;
  }

  const queryPrefix = basePath.includes("?") ? "&" : "?";
  return `${basePath}${queryPrefix}plano=${encodeURIComponent(normalizedPlan)}`;
};
