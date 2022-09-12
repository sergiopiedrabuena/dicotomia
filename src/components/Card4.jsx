import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@styles/CardsTrabajo.scss';

import Image4 from '../assets/images/image4.jpg';

function CardFourth() {
  return (
    <Card className='cardTrabajo'>
      <div className='cardContainer'>
      <Card.Img className='cardImg' src={Image4} />
      <Card.Body className='cardsBody'>
        <Card.Title>Cartas personalizadas de agentes</Card.Title>
        <Card.Text>
        Utilizo solamente css e imagenes. Montada en React con MUI.
        </Card.Text>
        <Button target='_blank' size="lg" variant="success" href="https://codesandbox.io/p/github/serghip/personalizedcards-mui/">Visualizar</Button>
      </Card.Body>
      </div>   
    </Card>
  );
}

export default CardFourth;