import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function DestinationCard(props) {
  return (
    <Card className='destination-card'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='destination-card-title'>{props.title}</Card.Title>
        <Card.Text className='destination-card-subtitle'>
          {props.subtitle}
        </Card.Text>
        <Button className = 'destination-card-button' variant="primary">Buscar</Button>
      </Card.Body>
    </Card> 
  );
}

export default DestinationCard;