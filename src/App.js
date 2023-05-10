import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home';
import About from './views/About';

function App(props) {
	console.log('ssr data', props);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
