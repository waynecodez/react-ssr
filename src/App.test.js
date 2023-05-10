import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders react ssr', () => {
	render(
		<MemoryRouter>
			<App data={{ name: 'Mock Test' }} />
		</MemoryRouter>
	);
	const linkElement = screen.getByText(/react ssr/i);
	expect(linkElement).toBeInTheDocument();
});
