import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import DanceAndEntertainment from '@pages/DanceAndEntertainment';
import '@styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dance-and-entertainment" element={<DanceAndEntertainment/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
