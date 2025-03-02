import { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Header.css";

function Header({logo_image}) {
  // Hook para gestionar si el encabezado debe ser fijo al desplazarse
  const [fix, setFix] = useState(false);
  // Hook para gestionar la visibilidad del menú off-canvas
  const [showMenu, setShowMenu] = useState(false);
  // Hook para gestionar si la vista es móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    function handleScroll() {
      setFix(window.scrollY >= 190);
    }

    function handleResize() {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMenu(false); // Cierra el menú si no es móvil
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={fix ? "header-container fixed" : "header-container"}>
        <div className="logo-container">
          <img src={logo_image} alt="logo" className="logo-item" loading="lazy" />
        </div>

        {/*Si es móvil, muestra el botón de menú */}
        {isMobile ? (
          <Button variant="primary" onClick={() => setShowMenu(true)} className="menu-button">
            ☰
          </Button>
        ) : (
          <ul className="nav-list">
            <li className="nav-item"><a href="/inicio">Inicio</a></li>
            <li className="nav-item"><a href="/reservas">Reservas</a></li>
            <li className="nav-item"><a href="/destinos">Destinos</a></li>
            <li className="nav-item"><a href="/contacto">Contacto</a></li>
            <li className="nav-item"><a href="/login">Iniciar Sesión</a></li>
          </ul>
        )}
      </header>

      {/*Menu Offcanvas para moviles */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" className="offcanvas-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav-list-mobile">
            <li className="nav-item"><a href="/inicio">Inicio</a></li>
            <li className="nav-item"><a href="/reservas">Reservas</a></li>
            <li className="nav-item"><a href="/destinos">Destinos</a></li>
            <li className="nav-item"><a href="/contacto">Contacto</a></li>
            <li className="nav-item"><a href="/login">Iniciar Sesión</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
