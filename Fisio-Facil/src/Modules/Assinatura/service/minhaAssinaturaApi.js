import { apiFetch } from "../../../config/httpClient.js";

export class ApiRequestError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
  }
}

const parseApiError = async (response, fallbackMessage) => {
  try {
    const body = await response.json();
    return body?.message || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
};

export const selecionarAssinatura = async ({ planoNome, membroSlug }) => {
  const response = await apiFetch("/minha-assinatura/selecionar", {
    method: "POST",
    requiresAuth: true,
    body: { planoNome, membroSlug },
  });

  if (!response.ok) {
    throw new ApiRequestError(
      await parseApiError(response, "Nao foi possivel salvar a assinatura."),
      response.status,
    );
  }
};

export const buscarMinhaAssinatura = async () => {
  const response = await apiFetch("/minha-assinatura", { requiresAuth: true });

  if (!response.ok) {
    throw new ApiRequestError(
      await parseApiError(response, "Nao foi possivel carregar a assinatura."),
      response.status,
    );
  }

  return response.json();
};

export const iniciarExercicioAssinatura = async (exercicioKey) => {
  const response = await apiFetch("/minha-assinatura/exercicios/iniciar", {
    method: "POST",
    requiresAuth: true,
    body: { exercicioKey },
  });

  if (!response.ok) {
    throw new ApiRequestError(
      await parseApiError(response, "Nao foi possivel iniciar o exercicio."),
      response.status,
    );
  }
};
