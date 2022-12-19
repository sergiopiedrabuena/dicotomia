import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


import Image1 from '@assets/images/image1.jpg';
import Image2 from '@assets/images/image2.jpg';


import '@styles/CarouselTrabajo.scss';

function CarouselTrabajo() {
    return (
        <Carousel id='carouselTrabajo' fade>
            <Carousel.Item className='itemCarousel'>
                <a target='_blank' href='https://codesandbox.io/p/github/serghip/react-leaflet-leaflet-markercluster/main'>
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
        </Carousel>
    );
}

export default CarouselTrabajo;