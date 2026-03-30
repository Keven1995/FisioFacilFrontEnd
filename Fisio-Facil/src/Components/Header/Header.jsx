import { useState } from "react";
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

  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    const previousPage = window.location.pathname;
    logout();
    navigate(previousPage);
  };

  return (
    <header className="header">
      <div className="header-container d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <Link to={ROUTES.HOME}>
            <h1>FisioFácil</h1>
          </Link>
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

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to={ROUTES.HOME} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicos" className="nav-link">
                  Serviços
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
