import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<div className="navbar-left">
				<ul>
					<li>
						<a href="#acercadeContainer">Acerca de</a>
					</li>
					<li>
						<a href="#contenidoTrabajo">Trabajos</a>
					</li>
					<li>
						<a href="#contenidoContacto">Contacto</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li>
						<a href="#portadaContainer">Sergio Piedrabuena</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
