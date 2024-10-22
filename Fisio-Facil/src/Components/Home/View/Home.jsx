import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Home.css'; 

const Home = () => {
  return (
    <div className="container home-container mt-5">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 style={{ color: '#28a745', fontFamily: 'Arial', fontWeight: 'bold' }}>
          Bem-vindo ao Fisio Fácil
        </h1>
        <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
          Sua saúde, nossa prioridade.
        </p>
      </header>

      {/* Seção de Apresentação */}
      <section className="mb-5">
        <h2 className="text-center" style={{ fontSize: '24px', color: '#28a745' }}>
          O que é o Fisio Fácil?
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          O Fisio Fácil é uma plataforma de fisioterapia que permite que você
          faça suas terapias no conforto de sua casa. Com planos personalizados
          e acompanhamento profissional, você pode cuidar da sua saúde com
          segurança e praticidade.
        </p>
      </section>

      {/* Seção de Benefícios */}
      <section className="mb-5">
        <h2 className="text-center" style={{ fontSize: '24px', color: '#28a745' }}>
          Benefícios do Fisio Fácil
        </h2>
        <ul className="list-unstyled text-center">
          <li style={{ fontSize: '18px', lineHeight: '1.6' }}>
            ✔️ Acesso a planos de terapia personalizados.
          </li>
          <li style={{ fontSize: '18px', lineHeight: '1.6' }}>
            ✔️ Realização das terapias no conforto de casa.
          </li>
          <li style={{ fontSize: '18px', lineHeight: '1.6' }}>
            ✔️ Suporte contínuo de profissionais qualificados.
          </li>
          <li style={{ fontSize: '18px', lineHeight: '1.6' }}>
            ✔️ Flexibilidade para escolher o melhor horário para você.
          </li>
        </ul>
      </section>

      {/* Chamada para Ação */}
      <div className="text-center mt-5">
        <h2 style={{ fontSize: '24px', color: '#28a745' }}>
          Pronto para começar sua jornada de recuperação?
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Clique no botão abaixo e conheça nossos planos!
        </p>
        <button
          className="btn btn-success mt-3"
          style={{ padding: '10px 30px', borderRadius: '30px', fontSize: '18px' }}
          onClick={() => window.location.href='/planos'}
        >
          Conheça nossos Planos
        </button>
      </div>
    </div>
  );
};

export default Home;
