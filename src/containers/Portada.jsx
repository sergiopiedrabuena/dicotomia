import React from 'react';
import '@styles/Portada.scss';
import FotoPortada from '@images/portada.png';

import AnimatedBackground from '@components/AnimatedBackground';

const Portada = () => {
	return (
		<>
			<div id='portadaContainer'>
				<AnimatedBackground></AnimatedBackground>				
				<div id='textoContainer'>
					<h1 id='tituloPortada' class='textoPortada'>Desarrollador web</h1>
					<h3 id='subtituloPortada' class='textoPortada'>Desarrollo fullstack</h3>
				</div>
				<div id='fotoContainer'>
					<img id='fotoPortada' src={FotoPortada}></img>
					<h2 id='fotoTexto'>Sergio Piedrabuena</h2>
				</div>				
			</div>
		</>
	);
}
export default Portada;