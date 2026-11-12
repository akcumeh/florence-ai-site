import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/renderWithProviders';
import { askUrl, links } from '../../content/links';
import Hero from './Hero';
import Nav from '../Nav/Nav';

describe('Hero', () => {
    it('shows the headline and the chat hand-off in both states', () => {
        renderWithProviders(<Hero appUrl="" />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            /understand your course\.\s*master your exams\./i
        );
        expect(screen.getAllByRole('link', { name: /whatsapp/i })[0]).toHaveAttribute('href', links.whatsapp);
        expect(screen.getAllByRole('link', { name: /telegram/i })[0]).toHaveAttribute('href', links.telegram);
    });

    it('falls back to WhatsApp and Telegram buttons while the app is not live', () => {
        renderWithProviders(<Hero appUrl="" />);
        expect(screen.getByRole('link', { name: 'Ask on WhatsApp' })).toHaveAttribute('href', links.whatsapp);
        expect(screen.getByRole('link', { name: 'Ask on Telegram' })).toHaveAttribute('href', links.telegram);
        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Explain osmosis simply' })).not.toBeInTheDocument();
    });

    it('fills the Ask bar from a chip and sends the question to the app', async () => {
        const assign = vi.fn();
        const original = window.location;
        Object.defineProperty(window, 'location', { configurable: true, value: { ...original, assign } });
        const user = userEvent.setup();
        renderWithProviders(<Hero appUrl="https://app.myflorence.site" />);

        await user.click(screen.getByRole('button', { name: 'Explain osmosis simply' }));
        expect(screen.getByLabelText('Ask Florence a question')).toHaveValue('Explain osmosis simply');
        await user.click(screen.getByRole('button', { name: /^ask$/i }));
        expect(assign).toHaveBeenCalledWith(
            'https://app.myflorence.site/ask?q=Explain%20osmosis%20simply&from=site'
        );
        expect(screen.getByRole('link', { name: 'Attach your notes' })).toHaveAttribute(
            'href',
            'https://app.myflorence.site/ask'
        );
        Object.defineProperty(window, 'location', { configurable: true, value: original });
    });

    it('builds no URL for an empty question or without an app', () => {
        expect(askUrl('   ', 'https://app.myflorence.site')).toBe('');
        expect(askUrl('Hi', '')).toBe('');
        expect(askUrl('a & b?', 'https://x.test')).toBe('https://x.test/ask?q=a%20%26%20b%3F&from=site');
    });
});

describe('Nav', () => {
    it('shows Log in to the app when it is live, chat links otherwise', () => {
        const { unmount } = renderWithProviders(<Nav appUrl="https://app.myflorence.site" />);
        expect(screen.getAllByRole('link', { name: 'Log in' })[0]).toHaveAttribute(
            'href',
            'https://app.myflorence.site/'
        );
        unmount();
        renderWithProviders(<Nav appUrl="" />);
        expect(screen.queryByRole('link', { name: 'Log in' })).not.toBeInTheDocument();
    });

    it('opens and closes the mobile menu', async () => {
        const user = userEvent.setup();
        renderWithProviders(<Nav appUrl="" />);
        const toggle = screen.getByRole('button', { name: 'Open menu' });
        await user.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await user.keyboard('{Escape}');
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });
});
