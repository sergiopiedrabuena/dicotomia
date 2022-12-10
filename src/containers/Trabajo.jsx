import React from 'react';
import '@styles/Trabajo.scss';
import CarouselTrabajo from '@components/CarouselTrabajo'
import CardsTrabajo from '../components/CardsTrabajo';

const Trabajo = () => {
	return (
		<>
			<div id="contenidoTrabajo" className='contenidoTrabajo'>
				<div className='trabajoTexto'>
					<h1 className='tituloTrabajo'>TRABAJOS</h1>
					<p className='textoTrabajo'> Puede visualizar cualquiera de mis proyectos enlazados a codesandbox mediante repositorio de github.</p>
				</div>
				<CarouselTrabajo/>
				<CardsTrabajo/>
			</div>
			<svg id='separadorTrabajo' viewBox="550 0 1000 265">
					<path id='pathSeparadorTrabajo' d="M1293.4,215.6c-341.7,0-589.5-105-653.9-138.6S482.6,0,369.2,0S76.5,75.1,0,190.9c0,23.8,0,47.2,0,69.1 c0,78.1,0,138.2,0,138.2v1.8h1920v-1.8V260V45.5C1920,45.5,1635,215.6,1293.4,215.6z" fill='hsl(130, 100%, 70%)' />
			</svg>
		</>
	);
}
export default Trabajo;