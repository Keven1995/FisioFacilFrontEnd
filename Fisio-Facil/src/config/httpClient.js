import { API_BASE_URL, getAuthToken } from "./api.js";

export const apiFetch = async (
  endpoint,
  { method = "GET", body, headers = {}, requiresAuth = false } = {},
) => {
  const requestHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (requiresAuth) {
    const token = getAuthToken();
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  return response;
};
