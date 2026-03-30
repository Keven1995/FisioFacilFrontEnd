import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header.jsx";

const navigateMock = vi.fn();
const logoutMock = vi.fn();

vi.mock("../../Context/AuthProvider.jsx", () => ({
  useAuth: () => ({
    isAuthenticated: true,
    userName: "Lucas",
    logout: logoutMock,
  }),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve mostrar opcao Minha assinatura no menu do usuario e navegar ao clicar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /abrir menu do usuario/i }));
    fireEvent.click(screen.getByRole("menuitem", { name: /minha assinatura/i }));

    expect(navigateMock).toHaveBeenCalledWith("/minha-assinatura");
  });

  it("deve chamar logout ao clicar em Sair", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /abrir menu do usuario/i }));
    fireEvent.click(screen.getByRole("menuitem", { name: /sair/i }));

    expect(logoutMock).toHaveBeenCalled();
  });
});
