import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {

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
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
      </ul>
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
          <li><a href="#">Blog de viajes</a></li>
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
      <p>&copy; JeredAirlines 2025</p>
    </footer>
    )
}

export default Footer;