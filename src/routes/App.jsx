import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Serghip from '@pages/Serghip';
import Portfolio from '@pages/Portfolio';
import '@styles/global.css';

const App = () => {
	return (
			<BrowserRouter>				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/serghip" element={<Serghip />}></Route>
						<Route path="/portfolio" element={<Portfolio />} />
					</Routes>				
			</BrowserRouter>
	);
}

export default App;
