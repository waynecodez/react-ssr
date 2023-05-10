import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
	const navigate = useNavigate();

	React.useEffect(() => {
		fetch('http://localhost:8080/api', { method: 'post' })
			.then((data) => data.json())
			.then((data) => console.log('success', data))
			.catch((err) => console.error('failure', err.message));
	});

	return (
		<div>
			<h1>About</h1>
			<button onClick={() => navigate('/')}>Go Home</button>
		</div>
	);
}

export default About;
