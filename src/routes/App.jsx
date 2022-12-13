import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Serghip from '@pages/Serghip';
import Portfolio from '@pages/Portfolio';
import PersonalizedCardsMui from "@pages/PersonalizedCardsMui";
import '@styles/global.css';

const App = () => {
	return (
			<BrowserRouter>				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/serghip" element={<Serghip />}></Route>						
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/portfolio/personalizedcardsmui" element={<PersonalizedCardsMui/>} />
					</Routes>				
			</BrowserRouter>
	);
}

export default App;
