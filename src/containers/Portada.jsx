import React from 'react';
import '@styles/Portada.scss';
import FotoPortada from '@images/portada.png';

const Portada = () => {
	return (
		<>
			<div id='portadaContainer'>			
				<div id='textoContainer'>
					<h1 id='tituloPortada' className='textoPortada'>Desarrollador web</h1>
					<h3 id='subtituloPortada' className='textoPortada'>Desarrollo fullstack</h3>
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