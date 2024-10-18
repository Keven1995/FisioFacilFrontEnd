import "../../Modules/Usuarios/View/Login.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FisioFacil</h1>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
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
              <a href="http://localhost:5173/login" className="nav-link">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="/contato" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
