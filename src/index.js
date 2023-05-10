import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const getInitialData = () => {
	try {
		return JSON.parse(
			document.getElementById('initial-data').getAttribute('data-json')
		);
	} catch (err) {
		return {};
	}
};

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	ReactDOM.hydrateRoot(
		document.getElementById('root'),
		<BrowserRouter>
			<App initialData={getInitialData()} />
		</BrowserRouter>
	);
} else {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<BrowserRouter>
			<App initialData={getInitialData()} />
		</BrowserRouter>
	);
}
