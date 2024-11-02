import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Home.css";

const Home = () => {
  return (
    <div className="container-home">
      {/* Seção de Apresentação */}
      <section className="mb-5">
        <h2 className="text-center section-title">O que é o Fisio Fácil?</h2>
        <p className="section-text">
          O Fisio Fácil é uma plataforma de fisioterapia que permite que você
          faça suas terapias no conforto de sua casa. Com planos personalizados
          e acompanhamento profissional, você pode cuidar da sua saúde com
          segurança e praticidade.
        </p>
      </section>

      {/* Seção de Benefícios */}
      <section className="mb-5">
        <h2 className="text-center section-title">Benefícios do Fisio Fácil</h2>
        <ul className="list-unstyled text-center section-text">
          <li>✔️ Acesso a planos de terapia personalizados.</li>
          <li>✔️ Realização das terapias no conforto de casa.</li>
          <li>✔️ Suporte contínuo de profissionais qualificados.</li>
          <li>✔️ Flexibilidade para escolher o melhor horário para você.</li>
        </ul>
      </section>

      <div className="text-center mt-5">
      <section className="mb-5">
        <h2 className="section-title">
          Pronto para começar sua jornada de recuperação?
        </h2>
        <p className="section-text">
          Clique no botão abaixo e conheça nossos planos!
        </p>
      </section>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success mt-3 action-btn"
            onClick={() => (window.location.href = "/planos")}
          >
            Conheça nossos planos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
