import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TerapiaHome from '../../../assets/img/terapiaHome.jpg';
import Choice from '/src/assets/choice.jpg';
import "../../Styles/Sobre.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sobre o Fisio Fácil</h1>
      <p className="text-center mb-5" style={{ fontSize: "18px", lineHeight: "1.6" }}>
        O Fisio Fácil é uma plataforma inovadora desenvolvida para oferecer apoio completo aos pacientes de fisioterapia. Nosso principal objetivo é permitir que pessoas façam suas terapias no conforto de suas casas, com um suporte completo e orientado por profissionais especializados.
      </p>

      <div className="row align-items-center">
        {/* Seção 1 */}
        <div className="col-md-6 mb-4">
          <h2 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "24px" }}>
            Terapia personalizada, onde você estiver
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Sabemos que a rotina dos pacientes pode ser corrida, e nem sempre é fácil comparecer a sessões presenciais. Pensando nisso, o Fisio Fácil oferece tratamentos que podem ser feitos em casa, com toda a praticidade e segurança. Com a nossa aplicação, você pode acessar planos de terapia personalizados, voltados para diferentes necessidades de fisioterapia.
          </p>
        </div>
        <div className="col-md-6 mb-4 text-center">
          <img
            src={TerapiaHome}
            alt="Terapia em casa"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="row align-items-center mt-5">
        {/* Imagem 2 */}
        <div className="col-md-6 mb-4 text-center">
          <img
            src={Choice}
            alt="Planos de terapia"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {/* Seção 2 */}
        <div className="col-md-6 mb-4">
          <h2 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "24px" }}>
            Escolha o plano que se encaixa na sua rotina
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Oferecemos uma variedade de planos acessíveis, para que você possa escolher aquele que melhor atende às suas necessidades. Quer você esteja focado em reabilitação de membros superiores, inferiores ou na coluna vertebral, o Fisio Fácil tem o plano certo para você. Todos os nossos planos são elaborados por especialistas para garantir que você receba o melhor atendimento possível.
          </p>
        </div>
      </div>

      {/* Chamada para ação */}
      <div className="text-center mt-5">
        <h2 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "24px" }}>
          Experimente o Fisio Fácil agora mesmo!
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Comece a cuidar da sua saúde sem sair de casa. Escolha o plano que mais se adapta à sua necessidade e comece o tratamento ideal hoje mesmo.
        </p>
        <button
          className="btn btn-success mt-3"
          style={{ padding: "10px 30px", borderRadius: "30px", fontSize: "18px" }}
          onClick={() => window.location.href='/planos'}
        >
          Conheça nossos Planos
        </button>
      </div>
    </div>
  );
};

export default About;
