import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/renderWithProviders';
import ThemeToggle from './ThemeToggle';
import ContrastToggle from '../ContrastToggle/ContrastToggle';

const theme = () => document.documentElement.dataset.theme;

describe('theme toggles', () => {
    it('starts on afternoon with no OS preference', () => {
        renderWithProviders(<ThemeToggle />);
        expect(theme()).toBe('afternoon');
    });

    it('navbar toggle switches between afternoon and dark and remembers it', async () => {
        const user = userEvent.setup();
        renderWithProviders(<ThemeToggle />);

        await user.click(screen.getByRole('button', { name: /switch to dark mode/i }));
        expect(theme()).toBe('dark');
        expect(localStorage.getItem('flo-scheme')).toBe('dark');

        await user.click(screen.getByRole('button', { name: /switch to light mode/i }));
        expect(theme()).toBe('afternoon');
    });

    it('contrast checkbox swaps afternoon for contrast in light mode only', async () => {
        const user = userEvent.setup();
        renderWithProviders(
            <>
                <ThemeToggle />
                <ContrastToggle />
            </>,
        );
        const box = screen.getByRole('checkbox', { name: /prefer high contrast/i });

        await user.click(box);
        expect(box).toBeChecked();
        expect(theme()).toBe('contrast');
        expect(localStorage.getItem('flo-contrast')).toBe('true');

        await user.click(screen.getByRole('button', { name: /switch to dark mode/i }));
        expect(theme()).toBe('dark');

        await user.click(screen.getByRole('button', { name: /switch to light mode/i }));
        expect(theme()).toBe('contrast');

        await user.click(box);
        expect(theme()).toBe('afternoon');
    });
});
