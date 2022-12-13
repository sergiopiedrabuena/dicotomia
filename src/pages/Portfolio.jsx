import React from 'react';
import Layout from '@containers/portfolio/Layout';
import Portada from '@containers/portfolio/Portada';
import AcercaDe from '@containers/portfolio/AcercaDe';
import Trabajo from '@containers/portfolio/Trabajo';
import Contacto from '@containers/portfolio/Contacto';

const Portfolio = () => {
	return (
		<>
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
