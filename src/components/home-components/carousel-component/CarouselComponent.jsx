import React from 'react';
import { carouselImages } from "../../../services/carousel-component-service/carouselComponentService"
import CarouselImages from './CarouselImages';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <div className='carousel-container'>
      <Carousel>
        {
          carouselImages.map((c, index) => (
            <Carousel.Item key={index} interval={2000}>
              <CarouselImages image={c.image} title={c.title} subtitle={c.subtitle} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default CarouselComponent;