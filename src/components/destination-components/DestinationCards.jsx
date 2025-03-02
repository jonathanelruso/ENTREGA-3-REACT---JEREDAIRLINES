import { destinations } from "../../services/destination-card-services/DestinationCardServices";
import DestinationCard from "./destination-cards/DestinationCard";
import "./DestinationCards.css"

function DestinationCards() {
    return (
        <div className="destinations-container">
            <h2 className="destinations-title">Nuestra selección de destinos elegidos para ti</h2>
            <div className="destinations-cards-container">
            {
                destinations.map((c) => (
                    <DestinationCard title={c.title} subtitle={c.subtitle} image={c.image} />
                ))
            }
        </div>
        </div>
    )
}

export default DestinationCards;