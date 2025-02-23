import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CarouselComponent.css"

function CarouselImages (props) {
    return (
        <>
      <img src={props.image} alt="slide" className='d-block w-100 carousel-image' loading='lazy' />
      <Carousel.Caption>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </Carousel.Caption>
    </>
    )
}

export default CarouselImages;