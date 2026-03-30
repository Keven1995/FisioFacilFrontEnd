const removeTrailingSlash = (value) => value.replace(/\/+$/, "");

const rawApiUrl = import.meta.env.VITE_API_URL || "";
const normalizedApiUrl = removeTrailingSlash(rawApiUrl);

export const AUTH_STORAGE_KEYS = Object.freeze({
  TOKEN: "authToken",
  USER_NAME: "userName",
});

export const API_BASE_URL = normalizedApiUrl
  ? normalizedApiUrl.endsWith("/api")
    ? normalizedApiUrl
    : `${normalizedApiUrl}/api`
  : "/api";

export const getAuthToken = () => localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
