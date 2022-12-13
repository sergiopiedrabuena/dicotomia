import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


import Image1 from '@assets/images/image1.jpg';
import Image2 from '@assets/images/image2.jpg';
import Image3 from '@assets/images/image3.jpg';
import Image4 from '@assets/images/image4.jpg';


import '@styles/CarouselTrabajo.scss';

function CarouselTrabajo() {
    return (
        <Carousel id='carouselTrabajo' fade>
            <Carousel.Item className='itemCarousel'>
                <a target='_blank' href='https://codesandbox.io/p/github/serghip/react-leaflet-leaflet-markercluster/csb-c3rkrx/draft/modern-butterfly'>
                <img
                    className="imageCarousel d-block w-100"
                    src={Image1}
                    alt="First slide"
                /></a>
                <Carousel.Caption className='captionCarousel'>
                    <h3>Mapa interactivo con buscador</h3>
                    <p>Utilize la libreria de leaflet.js y el framework de material desing. Montado sobre React y manipulado con javascript.</p>
                </Carousel.Caption>                                
            </Carousel.Item>
            <Carousel.Item className='itemCarousel'>
                <a target='_blank' href="https://codesandbox.io/p/github/serghip/react-APIrestful/main"><img
                    className="imageCarousel d-block w-100"
                    src={Image2}
                    alt="Second slide"
                /></a>
                <Carousel.Caption className='captionCarousel'>
                    <h3>CRUD enlazada a una API pública</h3>
                    <p>Se puede buscar, eliminar, adiccionar y visualizar productos. Montada con React con framework MUI.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='itemCarousel'>
                <a target='_blank' href="https://codesandbox.io/p/github/serghip/mcmasajes/main"><img
                    className="imageCarousel d-block w-100"
                    src={Image3}
                    alt="Third slide"
                /></a>
                <Carousel.Caption className='captionCarousel'>
                    <h3>Start up de masajes</h3>
                    <p>Uno de mis primero proyectos. Utilizo solamente express. Pagina estática.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='itemCarousel'>
                
            <a target='_blank' href="/portfolio/personalizedcardsmui"><img
                    className="imageCarousel d-block w-100"
                    src={Image4}
                    alt="Fourth slide"
                /></a>
                <Carousel.Caption className='captionCarousel'>
                    <h3>Cartas personalizadas de agentes</h3>
                    <p>Utilizo solamente css e imagenes. Montada en React con MUI.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselTrabajo;