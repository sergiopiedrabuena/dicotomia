import React from 'react';
import Icon1 from '@icons/icon-github.svg';
import Icon2 from '@icons/icon-gmail.svg';
import Icon3 from '@icons/icon-linkedin.svg';
import '@styles/Contacto.scss'

const Contacto = () => {
	return (
		<>
			<footer id="contenidoContacto" className='contenidoContacto'>
				<h1 className='tituloContacto'> CONTACTO </h1>
				<div id='contenidoRedes'>
					<div className='redesAcercaDe' id='linkedin'><a href='https://github.com/sergiopiedrabuena'><img src={Icon1}></img></a></div>
					<div className='redesAcercaDe' id='github'><a href='mailto:piedrabuena.sergio.f@gmail.com'><img src={Icon2}></img></a></div>
					<div className='redesAcercaDe' id='gmail'><a href='https://www.linkedin.com/in/sergio-fabian-piedrabuena-37aa0122b/'><img src={Icon3}></img></a></div>
				</div>
			</footer>
		</>
	);
}
export default Contacto;