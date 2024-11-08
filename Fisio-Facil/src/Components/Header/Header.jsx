import React, { useState } from "react";
import { useAuth } from "../../Context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado do menu de navegação
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // Estado do menu do usuário
  const { isAuthenticated, userName, logout } = useAuth();
  const navigate = useNavigate();

  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen); // Inverte o estado do menu de navegação
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen); // Inverte o estado do menu do usuário
  };

  const handleLogout = () => {
    const previousPage = window.location.pathname;
    logout();
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    navigate(previousPage);
  };

  return (
    <header className="header">
      <div className="header-container d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <a href="/">
            <h1>FisioFácil</h1>
          </a>
        </div>

        {isAuthenticated && userName && (
          <div className="user-dropdown">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{userName}</Tooltip>}
            >
              <button
                className="btn btn-primary rounded-circle"
                onClick={toggleUserMenu}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {userName.charAt(0).toUpperCase()}
              </button>
            </OverlayTrigger>

            {isUserMenuOpen && (
              <div className="dropdown-menu show mt-2">
                <button className="dropdown-item" onClick={handleLogout}>
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <nav className="header-nav">
        <div className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleNavMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
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
    </header>
  );
};

export default Header;
