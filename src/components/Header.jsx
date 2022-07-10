import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

const Header = () => {
	return (
		<nav>
			<div className="navbar-left">
				<ul>
					<li>
						<a href="#acercade">Acerca de</a>
					</li>
					<li>
						<a href="#trabajos">Trabajos</a>
					</li>
					<li>
						<a href="#contacto">Contacto</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">
						<a href="#portada">Sergio Piedrabuena</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
