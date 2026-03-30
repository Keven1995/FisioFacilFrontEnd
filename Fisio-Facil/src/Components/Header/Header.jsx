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
        setIsNavOpen(false);
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

  const closeNavMenu = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    const previousPage = window.location.pathname;
    logout();
    setIsUserMenuOpen(false);
    navigate(previousPage);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to={ROUTES.HOME} onClick={closeNavMenu}>
            <h1>FisioFacil</h1>
          </Link>
        </div>

        <div className="header-actions">
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

          <button
            type="button"
            className="nav-toggle"
            onClick={toggleNavMenu}
            aria-label="Alternar menu principal"
            aria-expanded={isNavOpen}
          >
            <span className="nav-toggle-icon" />
          </button>
        </div>
      </div>

      <nav className={`header-nav ${isNavOpen ? "is-open" : ""}`}>
        <ul className="header-nav-list">
          <li className="nav-item">
            <NavLink to={ROUTES.HOME} className="nav-link" onClick={closeNavMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/servicos" className="nav-link" onClick={closeNavMenu}>
              Servicos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sobre" className="nav-link" onClick={closeNavMenu}>
              Sobre
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contato" className="nav-link" onClick={closeNavMenu}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
