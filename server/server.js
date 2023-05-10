import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import App from '../src/App';

const app = express();
app.use(morgan('dev'));

const PORT = 8080;
const context = {};

const initialData = JSON.stringify({
	name: 'wayne',
	env: process.env.NODE_ENV,
});

const renderer = (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return res
				.status(500)
				.send('Oops, something went wrong. Refresh or try again later.');
		}

		const dataMarkup = ReactDOMServer.renderToString(
			<script id='initial-data' type='text/plain' data-json={initialData} />
		);

		const reactMarkup = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<App initialData={JSON.stringify(initialData)} />
			</StaticRouter>
		);

		const html = data.replace(
			'<div id="root"></div>',
			`<div id="root">${reactMarkup}</div>${dataMarkup}`
		);

		console.log('renderer', { path: req.url, html, initialData });
		res.send(html);
	});
};

app.use(cors());
app.use(express.static('./build', { index: false }));

app.post('/api', (req, res) => {
	res.status(200).send({ data: 'ok!!', initialData });
});

app.get('/*', renderer);

app.listen(PORT, () => {
	console.log('ssr listening on port:', PORT);
});
