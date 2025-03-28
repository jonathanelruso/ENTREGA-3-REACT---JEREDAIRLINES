import { destinations } from "../../services/destination-card-services/DestinationCardServices";
import DestinationCard from "./destination-cards/DestinationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import "./DestinationCards.css"

function DestinationCards() {
    return (
        <div className="destinations-container">
            <h2 className="destinations-title">Nuestra selección de destinos elegidos para ti</h2>
            <div className="destinations-cards-container">
                {
                    destinations.map((c, index) => (
                        <DestinationCard title={c.title} subtitle={c.subtitle} image={c.image} index={index} />
                    ))
                }
                <div className="rss-container">
                    <a href="https://entrega-2-react--jeredairlines.web.app/destinos" target="_blank" rel="noopener noreferrer" className="rss-link">
                        <FontAwesomeIcon icon={faRss} className="rss-icon" />
                        <p className="rss-text">Suscríbete a nuestro RSS para recibir las últimas novedades</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DestinationCards;