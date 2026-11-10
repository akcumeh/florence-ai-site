import { screen } from '@testing-library/react';
import { renderWithProviders } from './test/renderWithProviders';
import App from './App';

describe('App routes', () => {
    it('renders the home page at /', () => {
        renderWithProviders(<App />, { route: '/' });
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/understand your course/i);
    });

    it('renders the 404 page for unknown paths', () => {
        renderWithProviders(<App />, { route: '/nope' });
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
        expect(screen.getByRole('link', { name: /go to homepage/i })).toHaveAttribute('href', '/');
    });
});
