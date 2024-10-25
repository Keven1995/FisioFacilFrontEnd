import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverte o estado ao clicar no botão hamburger
  };

  return (
    <header className="header">
      <div className="header-container d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <a href="/">
            <h1>FisioFácil</h1>
          </a>
        </div>
        <nav className="header-nav">
          <div className="navbar navbar-expand-lg navbar-light">
            {/* Botão Hamburger */}
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleMenu} // Chama a função para abrir/fechar o menu
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu de Navegação */}
            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/servicos" className="nav-link">
                    Serviços
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/sobre" className="nav-link">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contato" className="nav-link">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
