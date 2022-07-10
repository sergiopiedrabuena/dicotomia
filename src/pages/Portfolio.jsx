import React from 'react';
import Layout from '@containers/Layout';
import Portada from '@containers/Portada';
import AcercaDe from '@containers/AcercaDe';
import Trabajo from '@containers/Trabajo';
import Contacto from '@containers/Contacto';

const Portfolio = () => {
	return (
		<>
			<h1> Modo desarrollo</h1>
			<Layout>
				<Portada></Portada>
				<AcercaDe></AcercaDe>
				<Trabajo></Trabajo>
				<Contacto></Contacto>
				
			</Layout>
		</>
	);
}

export default Portfolio;