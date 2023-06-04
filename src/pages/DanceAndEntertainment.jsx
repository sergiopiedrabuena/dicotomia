import React from 'react';
import "@styles/Home.scss";
import "@styles/Welcome.scss";

const Home = () => {
	return (
		<>
			<div id="danceAndEntertainment">
				<div id="danceAndEntertainmentList">
                    <ul>
                        <li><a href="services"> Servicios </a></li>
                        <li><a href="blog"> Blog </a></li>
                        <li><a href="our-dancers"> Nuestros bailarines </a></li>
                    </ul>
				</div>
			</div>
		</>
	);
}

export default Home;
