import SpineMemberTemplate from "../Shared/SpineMemberTemplate.jsx";
import lombarDesktopImg from "../img/optimized/lombar-desktop.jpg";
import lombarMobileImg from "../img/optimized/lombar-mobile.jpg";

const Lombar = () => {
  return (
    <SpineMemberTemplate
      memberSlug="lombar"
      memberName="Lombar"
      description="A regiao lombar suporta grande parte do peso corporal e participa de movimentos como flexao e extensao do tronco. Este pacote traz exercicios para fortalecer a base lombar, melhorar estabilidade e reduzir dores no dia a dia."
      imageDesktop={lombarDesktopImg}
      imageMobile={lombarMobileImg}
    />
  );
};

export default Lombar;
