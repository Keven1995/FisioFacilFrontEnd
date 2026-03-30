import { act, render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "./AuthProvider.jsx";
import { AUTH_STORAGE_KEYS } from "../config/api.js";

const AuthProbe = () => {
  const { isAuthenticated, userName, login, logout } = useAuth();

  useEffect(() => {
    window.__authActions = { login, logout };
  }, [login, logout]);

  return (
    <div>
      <span data-testid="is-authenticated">{String(isAuthenticated)}</span>
      <span data-testid="user-name">{userName || ""}</span>
    </div>
  );
};

describe("AuthProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    window.__authActions = undefined;
  });

  it("deve restaurar sessao quando token e userName existem no localStorage", async () => {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, "jwt-token");
    localStorage.setItem(AUTH_STORAGE_KEYS.USER_NAME, "Lucas");

    render(
      <AuthProvider>
        <AuthProbe />
      </AuthProvider>,
    );

    expect(await screen.findByTestId("is-authenticated")).toHaveTextContent("true");
    expect(screen.getByTestId("user-name")).toHaveTextContent("Lucas");
  });

  it("deve fazer login e logout atualizando estado e localStorage", async () => {
    render(
      <AuthProvider>
        <AuthProbe />
      </AuthProvider>,
    );

    await act(async () => {
      window.__authActions.login("token-123", "Keven");
    });

    expect(screen.getByTestId("is-authenticated")).toHaveTextContent("true");
    expect(screen.getByTestId("user-name")).toHaveTextContent("Keven");
    expect(localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN)).toBe("token-123");
    expect(localStorage.getItem(AUTH_STORAGE_KEYS.USER_NAME)).toBe("Keven");

    await act(async () => {
      window.__authActions.logout();
    });

    expect(screen.getByTestId("is-authenticated")).toHaveTextContent("false");
    expect(screen.getByTestId("user-name")).toHaveTextContent("");
    expect(localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN)).toBeNull();
    expect(localStorage.getItem(AUTH_STORAGE_KEYS.USER_NAME)).toBeNull();
  });
});
