import SpineMemberTemplate from "../Shared/SpineMemberTemplate.jsx";
import toracicaDesktopImg from "../img/optimized/toracica-desktop.jpg";
import toracicaMobileImg from "../img/optimized/toracica-mobile.jpg";

const Toracica = () => {
  return (
    <SpineMemberTemplate
      memberSlug="toracica"
      memberName="Toracica"
      description="A regiao toracica sustenta a parte superior do tronco e influencia diretamente sua postura respiracao e mobilidade. Este pacote combina exercicios para fortalecer a area e melhorar conforto funcional no cotidiano."
      imageDesktop={toracicaDesktopImg}
      imageMobile={toracicaMobileImg}
    />
  );
};

export default Toracica;
