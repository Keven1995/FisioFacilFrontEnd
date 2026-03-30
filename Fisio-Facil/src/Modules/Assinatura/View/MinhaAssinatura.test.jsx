import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MinhaAssinatura from "./MinhaAssinatura.jsx";

const navigateMock = vi.fn();
const buscarMinhaAssinaturaMock = vi.fn();
const iniciarExercicioAssinaturaMock = vi.fn();
let isAuthenticatedMock = true;

vi.mock("../../../Context/AuthProvider.jsx", () => ({
  useAuth: () => ({
    isAuthenticated: isAuthenticatedMock,
  }),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock("../service/minhaAssinaturaApi.js", () => ({
  buscarMinhaAssinatura: (...args) => buscarMinhaAssinaturaMock(...args),
  iniciarExercicioAssinatura: (...args) => iniciarExercicioAssinaturaMock(...args),
}));

describe("MinhaAssinatura", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isAuthenticatedMock = true;
  });

  it("deve carregar e exibir resumo da assinatura", async () => {
    buscarMinhaAssinaturaMock.mockResolvedValue({
      planoNome: "Basico",
      membroNome: "Cervical",
      membroSlug: "cervical",
      nomeUsuario: "Lucas",
      exerciciosDisponiveis: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
      exerciciosEmAndamento: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
      exerciciosNaoAcessados: [],
    });

    render(
      <MemoryRouter>
        <MinhaAssinatura />
      </MemoryRouter>,
    );

    expect(await screen.findByText(/acompanhe seu plano e o andamento dos exercicios/i)).toBeInTheDocument();
    expect(await screen.findByText("Cervical")).toBeInTheDocument();
    expect(await screen.findByText(/1 de 1 exercicios iniciados/i)).toBeInTheDocument();
  });

  it("deve exibir estado sem assinatura selecionada", async () => {
    buscarMinhaAssinaturaMock.mockResolvedValue({
      planoNome: null,
      membroNome: null,
      membroSlug: null,
      nomeUsuario: "Lucas",
      exerciciosDisponiveis: [],
      exerciciosEmAndamento: [],
      exerciciosNaoAcessados: [],
    });

    render(
      <MemoryRouter>
        <MinhaAssinatura />
      </MemoryRouter>,
    );

    expect(await screen.findByText(/nenhuma assinatura selecionada/i)).toBeInTheDocument();
  });

  it("deve iniciar exercicio e recarregar dados", async () => {
    buscarMinhaAssinaturaMock
      .mockResolvedValueOnce({
        planoNome: "Basico",
        membroNome: "Cervical",
        membroSlug: "cervical",
        nomeUsuario: "Lucas",
        exerciciosDisponiveis: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
        exerciciosEmAndamento: [],
        exerciciosNaoAcessados: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
      })
      .mockResolvedValueOnce({
        planoNome: "Basico",
        membroNome: "Cervical",
        membroSlug: "cervical",
        nomeUsuario: "Lucas",
        exerciciosDisponiveis: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
        exerciciosEmAndamento: [{ key: "cervical-flexao", titulo: "Flexao Cervical" }],
        exerciciosNaoAcessados: [],
      });
    iniciarExercicioAssinaturaMock.mockResolvedValue(undefined);

    render(
      <MemoryRouter>
        <MinhaAssinatura />
      </MemoryRouter>,
    );

    fireEvent.click(await screen.findByRole("button", { name: /iniciar/i }));

    await waitFor(() => {
      expect(iniciarExercicioAssinaturaMock).toHaveBeenCalledWith("cervical-flexao");
      expect(buscarMinhaAssinaturaMock).toHaveBeenCalledTimes(2);
    });
  });
});
