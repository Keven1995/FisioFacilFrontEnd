import SpineMemberTemplate from "../Shared/SpineMemberTemplate.jsx";
import cervicalDesktopImg from "../img/optimized/cervical-desktop.jpg";
import cervicalMobileImg from "../img/optimized/cervical-mobile.jpg";

const Cervical = () => {
  return (
    <SpineMemberTemplate
      memberSlug="cervical"
      memberName="Cervical"
      description="A regiao cervical sustenta a cabeca e permite movimentos amplos do pescoco. Este pacote inclui orientacoes e exercicios para ganhar estabilidade, reduzir desconfortos e prevenir novas crises."
      imageDesktop={cervicalDesktopImg}
      imageMobile={cervicalMobileImg}
    />
  );
};

export default Cervical;
