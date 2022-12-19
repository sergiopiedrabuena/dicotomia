import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@styles/CardsTrabajo.scss';

import Image1 from '../assets/images/image1.jpg';

function CardFirst() {
  return (
    <Card className='cardTrabajo'>
      <div className='cardContainerTrabajo'>
      <Card.Img className='cardImg' src={Image1} />
      <Card.Body className='cardsBody'>
        <Card.Title>Mapa interactivo con buscador</Card.Title>
        <Card.Text>
        Utilize la libreria de leaflet.js y el framework de material desing. Montado sobre React y manipulado con javascript.
        </Card.Text>
        <Button target='_blank' size="lg" variant="success" href="https://codesandbox.io/p/github/sergiopiedrabuena/react-leaflet-leaflet-markercluster/main">Visualizar</Button>
      </Card.Body>
      </div>            
    </Card>
  );
}

export default CardFirst;