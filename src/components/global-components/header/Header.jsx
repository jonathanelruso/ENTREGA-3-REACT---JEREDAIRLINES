import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="./logo/white-logo.png" alt="logo" className="logo-item"/>
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Reservas</li>
        <li className="nav-item">Destinos</li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Iniciar Sesión</li>
      </ul>
    </header>
  );
}

export default Header;