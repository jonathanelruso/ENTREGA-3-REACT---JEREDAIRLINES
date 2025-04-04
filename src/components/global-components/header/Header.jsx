import { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Header.css";

function Header({ logo_image, shrinkOnScroll = true }) {
  const [fix, setFix] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    function handleScroll() {
      if (shrinkOnScroll) {
        setFix(window.scrollY >= 190);
      }
    }

    function handleResize() {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMenu(false);
      }
    }

    if (shrinkOnScroll) {
      window.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (shrinkOnScroll) {
        window.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [shrinkOnScroll]);

  return (
    <>
      <header className={(shrinkOnScroll && fix) || !shrinkOnScroll ? "header-container fixed" : "header-container"}>
        <div className="logo-container">
          <img src={logo_image} alt="logo" className="logo-item" loading="lazy" />
        </div>

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

      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" className="offcanvas-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav-list-mobile">
            <li className="nav-item"><a href="/inicio">In0icio</a></li>
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
