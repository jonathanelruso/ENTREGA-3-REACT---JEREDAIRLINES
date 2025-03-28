import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Footer() {
  const [showAccordion, setShowAccordion] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function HandleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", HandleResize);
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  return (
    <footer className="footer-container">
      <span className="footer-title">JeredAirlines</span>
      <ul className="social-media-icons">
        <li>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        </li>
        <li>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </li>
        <li>
          <a href="https://github.com/jonathanelruso/ENTREGA-1-REACT---JEREDAIRLINES"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
      </ul>
      {isMobile ? (
        <div className="footer-accordion-container">
          <Accordion className="footer-accordion-item"
          sx={{ backgroundColor: '#142157', color: '#fff' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Acerca de</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><a href="#">¿Quiénes somos?</a></li>
                <li><a href="#">Nuestra misión</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
                <li><a href="#">Contáctanos</a></li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion className="footer-accordion-item"
          sx={{ backgroundColor: '#142157', color: '#fff' }}>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Servicios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><a href="#">Reservas de vuelos</a></li>
                <li><a href="#">Check-in online</a></li>
                <li><a href="#">Estado de vuelos</a></li>
                <li><a href="#">Atención al cliente</a></li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion className="footer-accordion-item"
          sx={{ backgroundColor: '#142157', color: '#fff' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Comunidad</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><a href="#">Programa de fidelidad</a></li>
                <li><a href="#">Ofertas y promociones</a></li>
                <li><a href="https://entrega-2-react--jeredairlines.web.app/blog-de-viajes">Blog de viajes</a></li>
                <li><a href="#">Foro de viajeros</a></li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion className="footer-accordion-item"
          sx={{ backgroundColor: '#142157', color: '#fff' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Legal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Política de cookies</a></li>
                <li><a href="#">Devoluciones</a></li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div className="info-container">
          <ul>
            <li className="footer-list-header">Acerca de</li>
            <li><a href="#">¿Quiénes somos?</a></li>
            <li><a href="#">Nuestra misión</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
          <ul>
            <li className="footer-list-header">Servicios</li>
            <li><a href="#">Reservas de vuelos</a></li>
            <li><a href="#">Check-in online</a></li>
            <li><a href="#">Estado de vuelos</a></li>
            <li><a href="#">Atención al cliente</a></li>
          </ul>
          <ul>
            <li className="footer-list-header">Comunidad</li>
            <li><a href="#">Programa de fidelidad</a></li>
            <li><a href="#">Ofertas y promociones</a></li>
            <li><a href="https://entrega-2-react--jeredairlines.web.app/blog-viajes.xml">Blog de viajes</a></li>
            <li><a href="#">Foro de viajeros</a></li>
          </ul>
          <ul>
            <li className="footer-list-header">Legal</li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Política de cookies</a></li>
            <li><a href="#">Devoluciones</a></li>
          </ul>
        </div>
      )}
      <p className="footer-bottom-subtitle">&copy; JeredAirlines 2025</p>
    </footer>
  )
}

export default Footer;