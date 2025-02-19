import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CarouselComponent.css"

function CarouselComponent() {
  return (
    <div className='carousel-container'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img src="./carousel-images/slide-1.jpg" alt="slide-1" className='d-block w-100 carousel-image' />
          <Carousel.Caption>
            <h3>¿Destinos? Cualquiera que elijas</h3>
            <p>Contamos con cientos de destinos perfectos para tus necesidades.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src="./carousel-images/slide-2.jpg" alt="slide-1" className='d-block w-100 carousel-image' />
          <Carousel.Caption>
            <h3>Viaja seguro, viaja feliz.</h3>
            <p>Estamos contigo en cada despegue y aterrizaje</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src="./carousel-images/slide-3.jpg" alt="slide-1" className='d-block w-100 carousel-image' />
          <Carousel.Caption>
            <h3>El mundo te espera </h3>
            <p>
              JeredAirlines es tu aliado para conseguirlo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;