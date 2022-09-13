import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@styles/CardsTrabajo.scss';

import Image2 from '../assets/images/image2.jpg';

function CardSecond() {
  return (
    <Card className='cardTrabajo'>
      <div className='cardContainerTrabajo'>
      <Card.Img className='cardImg' src={Image2} />
      <Card.Body className='cardsBody'>
        <Card.Title>CRUD enlazada a una API pública</Card.Title>
        <Card.Text>
        Se puede buscar, eliminar, adiccionar y visualizar productos. Montada con React con framework MUI.
        </Card.Text>
        <Button target='_blank' size="lg" variant="success" href="https://codesandbox.io/p/github/serghip/react-APIrestful/main">Visualizar</Button>
      </Card.Body>
      </div>      
    </Card>
  );
}

export default CardSecond;