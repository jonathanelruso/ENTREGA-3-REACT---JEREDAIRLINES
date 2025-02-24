import { cards } from '../../../../services/home-cards-service/homeCardsService';
import HomeBookingButton from '../home-booking-button/HomeBookingButton';
import HomeCard from './home-card/HomeCard';


function HomeCards() {
  return (
    <>
      <div className='home-content-container'>
        <h2 className='content-title'>Estos son los lugares más visitados por nuestros clientes</h2>
        {
          cards.map((c) => (
            <HomeCard image={c.image} title={c.title} subtitle={c.subtitle} />
          ))

        }
        <div className='button-container'>
          <h4 className='button-title'>Explora el mundo sin complicaciones. ¡Reserva tu vuelo hoy!</h4>
          <HomeBookingButton />
        </div>

      </div>
    </>

  );
}

export default HomeCards;