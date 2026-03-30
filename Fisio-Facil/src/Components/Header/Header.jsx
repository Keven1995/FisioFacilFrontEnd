import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../Context/AuthProvider.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ROUTES } from "../../constants/routes.js";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, userName, logout } = useAuth();
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleNavMenu = () => {
    setIsNavOpen((previousState) => !previousState);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((previousState) => !previousState);
  };

  const handleLogout = () => {
    const previousPage = window.location.pathname;
    logout();
    setIsUserMenuOpen(false);
    navigate(previousPage);
  };

  return (
    <header className="header">
      <div className="header-container d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <Link to={ROUTES.HOME}>
            <h1>FisioFacil</h1>
          </Link>
        </div>

        {isAuthenticated && userName && (
          <div className="user-dropdown" ref={userMenuRef}>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>{userName}</Tooltip>}>
              <button
                type="button"
                className="user-avatar-btn"
                onClick={toggleUserMenu}
                aria-haspopup="menu"
                aria-expanded={isUserMenuOpen}
                aria-label="Abrir menu do usuario"
              >
                {userName.charAt(0).toUpperCase()}
              </button>
            </OverlayTrigger>

            {isUserMenuOpen && (
              <div className="user-menu" role="menu">
                <button type="button" className="user-menu-item" onClick={handleLogout} role="menuitem">
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
                <NavLink to={ROUTES.HOME} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicos" className="nav-link">
                  Servicos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sobre" className="nav-link">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contato" className="nav-link">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
