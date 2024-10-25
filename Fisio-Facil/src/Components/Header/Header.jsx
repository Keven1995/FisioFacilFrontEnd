import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";

const Header = () => {
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
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/sobre" className="nav-link">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/servicos" className="nav-link">
                    Serviços
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
