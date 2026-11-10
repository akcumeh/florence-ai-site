import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>,
    );

describe('App routes', () => {
    it('renders the home page at /', () => {
        renderAt('/');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/understand your course/i);
    });

    it('renders the 404 page for unknown paths', () => {
        renderAt('/nope');
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
        expect(screen.getByRole('link', { name: /go to homepage/i })).toHaveAttribute('href', '/');
    });
});
