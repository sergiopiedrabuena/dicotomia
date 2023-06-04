import React, {useEffect} from 'react';
import Welcome  from '@components/Welcome';
import { resizeHandler } from '@hooks/resizeHandler';
import "@styles/Home.scss";
import "@styles/Welcome.scss";

const Home = () => {
	useEffect(() => {
		resizeHandler();
	  }, []);

	return (
		<>
			<Welcome/>
			<div id="home">
				<div id="homeList">					
					<a href="dance-and-entertainment"> Danza y entretenimiento </a>
					<a href="web-development"> Desarrollo web </a>
					<a href="about-us"> Acerca de </a>
					<a href="contact"> Contacto </a>
				</div>
			</div>
		</>
	);
}

export default Home;
