

import { cards } from '../../../../services/home-cards-service/homeCardsServices';
import HomeCard from './home-card/HomeCard';

function HomeCards () {
    return (

        <div className='home-content-container'>
          {
            cards.map((c) => (
              <HomeCard image={c.image} title={c.title} subtitle={c.subtitle}/>
            ))
    
          }
        </div>
      );
}

export default HomeCards;