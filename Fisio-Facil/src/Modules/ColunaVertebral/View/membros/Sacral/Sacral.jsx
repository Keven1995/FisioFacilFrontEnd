import SpineMemberTemplate from "../Shared/SpineMemberTemplate.jsx";
import sacralDesktopImg from "../img/optimized/sacral-desktop.jpg";
import sacralMobileImg from "../img/optimized/sacral-mobile.jpg";

const Sacral = () => {
  return (
    <SpineMemberTemplate
      memberSlug="sacral"
      memberName="Sacral"
      description="A regiao sacral conecta a coluna a pelve e e essencial para transferir carga entre tronco e membros inferiores. Este pacote oferece orientacoes e exercicios para aumentar estabilidade pelvica, aliviar desconfortos e prevenir sobrecarga."
      imageDesktop={sacralDesktopImg}
      imageMobile={sacralMobileImg}
    />
  );
};

export default Sacral;
