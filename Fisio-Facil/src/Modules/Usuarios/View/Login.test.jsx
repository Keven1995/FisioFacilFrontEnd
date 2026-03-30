import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login.jsx";

const navigateMock = vi.fn();
const loginMock = vi.fn();
const apiFetchMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
    useLocation: () => ({ state: null }),
  };
});

vi.mock("../../../Context/AuthProvider.jsx", () => ({
  useAuth: () => ({
    login: loginMock,
  }),
}));

vi.mock("../../../config/httpClient.js", () => ({
  apiFetch: (...args) => apiFetchMock(...args),
}));

describe("Login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve exibir validacao quando campos obrigatorios nao forem preenchidos", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole("button", { name: /^login$/i }));

    expect(await screen.findByText("Preencha todos os campos.")).toBeInTheDocument();
    expect(apiFetchMock).not.toHaveBeenCalled();
  });

  it("deve chamar login no contexto e redirecionar quando autenticacao for bem-sucedida", async () => {
    apiFetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ token: "jwt", userName: "Lucas" }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "user@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByRole("button", { name: /^login$/i }));

    await waitFor(() => {
      expect(apiFetchMock).toHaveBeenCalledWith("/usuarios/login", {
        method: "POST",
        body: { email: "user@test.com", password: "12345678" },
      });
      expect(loginMock).toHaveBeenCalledWith("jwt", "Lucas");
      expect(navigateMock).toHaveBeenCalled();
    });
  });
});
