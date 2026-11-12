import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithProviders(ui, { route = '/' } = {}) {
    return render(
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>,
    );
}
