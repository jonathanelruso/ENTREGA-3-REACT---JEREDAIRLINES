import { cards } from '../../../../services/home-cards-service/homeCardsService';
import HomeCard from './home-card/HomeCard';


function HomeCards () {
    return (

        <div className='home-content-container'>
          <h2 className='content-title'>Estos son los lugares más visitados por nuestros clientes</h2>
          {
            cards.map((c) => (
              <HomeCard image={c.image} title={c.title} subtitle={c.subtitle}/>
            ))
    
          }
        </div>
      );
}

export default HomeCards;