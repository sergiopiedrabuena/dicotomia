import React from 'react';
import '@styles/Portada.scss';
import FotoPortada from '@images/portada.png';

const Portada = () => {
	return (
		<>
			<div>
				<div id='portadaContainer'>
					<div id='textoContainer'>
						<h1 id='tituloPortada' class='textoPortada'>Desarrollador web</h1>
						<h3 id='subtituloPortada' class='textoPortada'>Diseño y desarrollo frontend</h3>
					</div>
					<div id='fotoContainer'>
						<img id='fotoPortada' src={FotoPortada}></img>
						<h2 id='fotoTexto'>Sergio Piedrabuena</h2>
					</div>
				</div>
				<svg id='separadorPortada' viewBox="550 0 1000 265">
					<path id='pathSeparadorPortada' d="M1293.4,215.6c-341.7,0-589.5-105-653.9-138.6S482.6,0,369.2,0S76.5,75.1,0,190.9c0,23.8,0,47.2,0,69.1 c0,78.1,0,138.2,0,138.2v1.8h1920v-1.8V260V45.5C1920,45.5,1635,215.6,1293.4,215.6z" fill='rgb(7, 49, 0)' />
				</svg>
			</div>
		</>
	);
}
export default Portada;