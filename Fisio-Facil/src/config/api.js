const removeTrailingSlash = (value) => value.replace(/\/+$/, "");

const rawApiUrl = import.meta.env.VITE_API_URL || "";
const normalizedApiUrl = removeTrailingSlash(rawApiUrl);

export const API_BASE_URL = normalizedApiUrl
  ? normalizedApiUrl.endsWith("/api")
    ? normalizedApiUrl
    : `${normalizedApiUrl}/api`
  : "/api";
