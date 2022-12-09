import React from 'react';
import '@styles/AcercaDe.scss';
import '@styles/global.css';

import ShapeWave from '../components/ShapeWave';
import frontendIcon from '../assets/icons/frontend.png';
import backendIcon from '../assets/icons/backend.png';
import desingIcon from '../assets/icons/desing.png';

const AcerdaDe = () => {
	return (
		<>
			<section id='acercadeSection'>
			<div id='acercadeContainer'>
				<ShapeWave></ShapeWave>
				<div id='acercadeTexto'>
					<h1 id='tituloAcercade'>Acerca de mi</h1>
					<p id='textoAcercade'>
						¡Hola! Bienvenido a mi portafolio.<br /> 
						Tengo 27 años, oriundo de la ciudad de La plata, 
						Buenos Aires, Argentina. Comencé estudiando Analista en 
						sistemas de información en la Universidad Tecnológica Nacional, 
						hasta que encontré mi vocación como <b>desarrollador fullstack</b> siendo 
						actualmente autodidacta en complemento con la escuela de desarrollo 
						web e ingles de Platzi Academy.<br /> Sumado a la experiencia 
						universitaria, <b>tengo 2 años de experiencia en programación 
						fullstack</b>, aunque me oriento al área frontend.</p>
				</div>
			</div>
			</section>
			<section id="cardAcercadeSection">
				<div id='cardContainer'>
					<div id='cardFrontend' className='cardAcercaDe'>
						<img className='cardIcon' src={frontendIcon}></img>
						<h1 className='cardTitulo'>Frontend</h1>
						<p className='cardSubtitulo'>Me gusta trabajar sobre este área, mi portafolio contiene css puro, aunque tambien he usado diferentes framework y bibliotecas.<br /><br /><b>He aqui con lo que he trabajado:</b></p>						<div className='cardContenido'>
							<ul className='cardLista'>
								<li className='cardListaElemento'>html 5</li>
								<li className='cardListaElemento'>css/scss</li>
								<li className='cardListaElemento'>javascript/jquery</li>
								<li className='cardListaElemento'>bootstrap 4</li>
								<li className='cardListaElemento'>material ui 5</li>
								<li className='cardListaElemento'>leafletjs</li>
								<li className='cardListaElemento'>chart.js</li>
							</ul>
						</div>
					</div>
					<div id='cardBackend' className='cardAcercaDe'>
						<img className='cardIcon' src={backendIcon}></img>
						<h1 className='cardTitulo'>Backend</h1>
						<p className='cardSubtitulo'>Tengo experiencias montando aplicaciones web, crud con manejo de base de datos y startups<br /><br /><b>Habitualmente trabajo con:</b></p>
						<div className='cardContenido'>
							<div className='cardContenido'>
								<ul className='cardLista'>
									<li className='cardListaElemento'>node js</li>
									<li className='cardListaElemento'>mysql</li>
									<li className='cardListaElemento'>mongodb</li>
									<li className='cardListaElemento'>heroku</li>
									<li className='cardListaElemento'>git github</li>
									<li className='cardListaElemento'>Linux - Cmd</li>
								</ul>
							</div>
						</div>
					</div>
					<div id='cardDesing' className='cardAcercaDe'>
						<img className='cardIcon' src={desingIcon}></img>
						<h1 className='cardTitulo'>Diseño</h1>
						<p className='cardSubtitulo'>Desde el lado artístico he aprendido a usar algunas herramientas que me resultan practicas<br /><br /><b>Tengo las nociones basicas de:</b></p>
						<div className='cardContenido'>
							<div className='cardContenido'>
								<ul className='cardLista'>
									<li className='cardListaElemento'>adobe photoshop</li>
									<li className='cardListaElemento'>figma</li>
									<li className='cardListaElemento'>adobe premiere</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AcerdaDe;