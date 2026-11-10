import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../theme/ThemeProvider';

export function renderWithProviders(ui, { route = '/' } = {}) {
    return render(
        <ThemeProvider>
            <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
        </ThemeProvider>,
    );
}
