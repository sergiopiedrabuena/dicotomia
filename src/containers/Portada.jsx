import React from 'react';
import FotoPortada from '@images/portada.png';
import Loading from '../components/Loading';
import '@styles/Portada.scss';
import '@styles/Loading.scss';

const Portada = () => {
	return (
		<>
			<Loading/>
			<div id='portadaContainer'>			
				<div id='textoContainer'>
					<h1 id='tituloPortada' className='textoPortada'>Desarrollador web</h1>
					<h3 id='subtituloPortada' className='textoPortada'>Desarrollo fullstack</h3>
				</div>
				<div id='fotoContainer'>
					<img id='fotoPortada'
					src={FotoPortada}					
					onLoad={() => {
						let loading= document.getElementById("loading");
						loading.style.animation="disappearLoadingMessage 2s";
						setTimeout(() =>{
							loading.style.display = "none"
						},2000);
					}}
					></img>
					<h2 id='fotoTexto'>Sergio Piedrabuena</h2>
				</div>				
			</div>
		</>
	);
}
export default Portada;