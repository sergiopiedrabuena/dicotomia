import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@styles/CardsTrabajo.scss';

import Image3 from '../assets/images/image3.jpg';

function CardThird() {
  return (
    <Card className='cardTrabajo'>
      <div className='cardContainer'>
      <Card.Img className='cardImg' src={Image3} />
      <Card.Body className='cardsBody'>
        <Card.Title>Start up de masajes</Card.Title>
        <Card.Text>
        Uno de mis primero proyectos. Utilizo solamente express. Pagina estática.
        </Card.Text>
        <Button target='_blank' size="lg" variant="success" className='buttonCarousel' href="https://codesandbox.io/p/github/serghip/mcmasajes/main">Visualizar</Button>
      </Card.Body>
      </div>    
    </Card>
  );
}

export default CardThird;