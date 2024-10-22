import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center mt-5">
        <p style={{ fontSize: "14px" }}>
          &copy; 2024 Fisio Fácil. Todos os direitos reservados.
        </p>
        <p style={{ fontSize: "14px" }}>Contato: suporte@fisiofacil.com</p>
      </footer>
    </div>
  );
};

export default Footer;
