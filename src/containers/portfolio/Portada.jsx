import React from 'react';
import FotoPortada from '@images/portada.png';
import Loading from '@components/Loading';
import '@styles/Portada.scss';
import '@styles/Loading.scss';

const Portada = () => {
	return (
		<>
			<Loading />
			<div id='portadaContainer'>
				<div id='textoContainer'>
					<h1 id='tituloPortada' className='textoPortada'>Desarrollador web</h1>
					<h3 id='subtituloPortada' className='textoPortada'>Desarrollo fullstack</h3>
				</div>
				<div id='fotoContainer'>
					<img id='fotoPortada'
						src={FotoPortada}
						onLoad={() => {
							let loading = document.getElementById("loading");
							loading.style.animation = "disappearLoadingMessage 0.5s";
							setTimeout(() => {
								loading.style.display = "none"
							}, 500);
							let tituloPortada =document.getElementById("tituloPortada");
							let subtituloPortada = document.getElementById("subtituloPortada");
							let fotoPortada = document.getElementById("fotoPortada");
							let fotoTexto = document.getElementById("fotoTexto");
							setTimeout(() => {
								tituloPortada.style = "animation: apareceTexto 2s;";
								subtituloPortada.style = "animation: typing 1.7s steps(16), blink .5s infinite step-end alternate;";
								fotoPortada.style = "animation: apareceFoto 3s;";
								fotoTexto.style = "animation: apareceTexto 2s;";
							}, 100);



						}}
					></img>
					<h2 id='fotoTexto'>Sergio Piedrabuena</h2>
				</div>
			</div>
		</>
	);
}
export default Portada;