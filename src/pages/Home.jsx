import React from 'react';
import Welcome  from '../components/Welcome';
import "../styles/Home.scss";
import "../styles/Welcome.scss";

//Tamaño de pantalla
function resizeListener() {
	return window.innerHeight;
}
function resizer() {
	let pageSelector = document.getElementById('pageSelector');
	let value = resizeListener();
	pageSelector.style = `height: ${value}px`;
}
window.addEventListener("resize", () => {
	resizer();
});
window.addEventListener("load", () => {
	resizer()
});

const Home = () => {
	return (
		<div>
			<Welcome/>
			<ul id='pageSelector' className='pageSelector'>
				<li className='portfolioPage'><a href='/portfolio'>Portfolio</a></li>
				<li className='serghipPage'><a href='/serghip'>Perfil<br/>artistico</a></li>
			</ul>
		</div>
	);
}

export default Home;
