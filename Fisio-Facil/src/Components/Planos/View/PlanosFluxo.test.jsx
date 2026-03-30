import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PlanoBasico from "./PlanoBasico.jsx";
import PlanoIntermediario from "./PlanoIntermediario.jsx";
import PlanoPlus from "./PlanoPlus.jsx";

const navigateMock = vi.fn();
const selecionarAssinaturaMock = vi.fn();
let isAuthenticatedMock = true;

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
    useLocation: () => ({ pathname: "/planoBasico/cervical" }),
    useParams: () => ({ membro: "cervical" }),
  };
});

vi.mock("../../../Context/AuthProvider.jsx", () => ({
  useAuth: () => ({
    isAuthenticated: isAuthenticatedMock,
  }),
}));

vi.mock("../../../config/memberExerciseRoutes.js", () => ({
  buildExercisePath: (membro, plano) => `/membros/${membro}/exercicios?plano=${plano}`,
}));

vi.mock("../../../Modules/Assinatura/service/minhaAssinaturaApi.js", () => ({
  selecionarAssinatura: (...args) => selecionarAssinaturaMock(...args),
}));

describe("Fluxo de selecao de assinatura nos planos", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isAuthenticatedMock = true;
  });

  it("deve salvar assinatura no plano Basico e navegar para exercicios", async () => {
    selecionarAssinaturaMock.mockResolvedValue(undefined);
    render(<PlanoBasico />);

    fireEvent.click(screen.getByRole("button", { name: /ver exercicios para cervical/i }));

    await waitFor(() => {
      expect(selecionarAssinaturaMock).toHaveBeenCalledWith({
        planoNome: "Basico",
        membroSlug: "cervical",
      });
      expect(navigateMock).toHaveBeenCalledWith("/membros/cervical/exercicios?plano=basico");
    });
  });

  it("deve salvar assinatura no plano Intermediario e navegar para exercicios", async () => {
    selecionarAssinaturaMock.mockResolvedValue(undefined);
    render(<PlanoIntermediario />);

    fireEvent.click(screen.getByRole("button", { name: /ver exercicios para cervical/i }));

    await waitFor(() => {
      expect(selecionarAssinaturaMock).toHaveBeenCalledWith({
        planoNome: "Intermediario",
        membroSlug: "cervical",
      });
      expect(navigateMock).toHaveBeenCalledWith("/membros/cervical/exercicios?plano=intermediario");
    });
  });

  it("deve redirecionar para login quando usuario nao estiver autenticado", async () => {
    isAuthenticatedMock = false;
    render(<PlanoPlus />);

    fireEvent.click(screen.getByRole("button", { name: /ver exercicios para cervical/i }));

    await waitFor(() => {
      expect(selecionarAssinaturaMock).not.toHaveBeenCalled();
      expect(navigateMock).toHaveBeenCalledWith("/login", { state: { from: "/planoBasico/cervical" } });
    });
  });
});
