import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Landing() {
	const navigate = useNavigate();
	const [count, setCount] = React.useState(1);
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<ul>
					<li>
						<Link to='/home' color='orange'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
				<img src={'./logo.svg'} className='App-logo' alt='logo' />
				<p>React SSR</p>
				<h1>{isClient ? 'Is Client' : 'Is Server'}</h1>
				<button
					onClick={() => {
						console.log('done it!');
						setCount(count + 1);
					}}>
					Count Up {count}
				</button>

				{/* <button onClick={() => navigate('/home')}>Home</button>
				<button onClick={() => navigate('/about')}>About</button> */}
			</header>
		</div>
	);
}

export default Landing;
