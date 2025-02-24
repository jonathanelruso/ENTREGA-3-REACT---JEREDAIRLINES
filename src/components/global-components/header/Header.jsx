import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 190) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <header className={fix ? 'header-container fixed' : 'header-container'}>
        <div className="logo-container">
          <img src="./logo/white-logo.png" alt="logo" className="logo-item" loading="lazy"/>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/home">Home</a></li>
          <li className="nav-item"><a href="/home">Reservas</a></li>
          <li className="nav-item"><a href="/home">Destinos</a></li>
          <li className="nav-item"><a href="/home">Contacto</a></li>
          <li className="nav-item"><a href="/home">Iniciar Sesión</a></li>
        </ul>
      </header>
    </>
  );
}

export default Header;