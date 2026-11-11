import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/renderWithProviders';
import Hero from './Hero';

describe('Hero', () => {
    it('shows the two-line headline', () => {
        renderWithProviders(<Hero />);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toHaveTextContent('Understand your course. Master your exams.');
    });

    it('links the nav to the page sections', () => {
        renderWithProviders(<Hero />);
        const nav = screen.getByRole('navigation', { name: 'Main' });
        expect(within(nav).getByRole('link', { name: 'How it works' })).toHaveAttribute('href', '#how-it-works');
        expect(within(nav).getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '#faq');
        expect(within(nav).getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact');
    });

    it('opens Telegram in a new tab', () => {
        renderWithProviders(<Hero />);
        const tgLinks = screen.getAllByRole('link', { name: 'Telegram' });
        expect(tgLinks).toHaveLength(2);
        for (const tg of tgLinks) {
            expect(tg).toHaveAttribute('href', 'https://t.me/FlorenceAIBot');
            expect(tg).toHaveAttribute('target', '_blank');
            expect(tg).toHaveAttribute('rel', 'noopener noreferrer');
        }
    });

    it('opens the general WhatsApp chat from the navbar', () => {
        renderWithProviders(<Hero />);
        const wa = screen.getByRole('link', { name: 'Whatsapp' });
        expect(wa).toHaveAttribute('href', 'https://wa.me/message/PVXH2K3TDYTGP1');
        expect(wa).toHaveAttribute('target', '_blank');
    });

    it('links WhatsApp and Telegram in the caption', () => {
        renderWithProviders(<Hero />);
        const caption = screen.getByText(/ask questions here, or get answers on/i);
        expect(within(caption).getByRole('link', { name: 'WhatsApp' })).toHaveAttribute(
            'href',
            'https://wa.me/message/PVXH2K3TDYTGP1',
        );
        expect(within(caption).getByRole('link', { name: 'Telegram' })).toHaveAttribute(
            'href',
            'https://t.me/FlorenceAIBot',
        );
    });

    it('renders the wordmark with alt text and the folders as decoration', () => {
        renderWithProviders(<Hero />);
        expect(screen.getByRole('img', { name: 'Florence' })).toBeInTheDocument();
        expect(screen.getAllByRole('presentation')).toHaveLength(1);
    });

    it('includes the theme toggle', () => {
        renderWithProviders(<Hero />);
        expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
    });
});

describe('Ask form', () => {
    it('sends the trimmed question', async () => {
        const user = userEvent.setup();
        const onAsk = vi.fn();
        renderWithProviders(<Hero onAsk={onAsk} />);

        await user.type(screen.getByRole('textbox', { name: 'Your question' }), '  What is inertia?  ');
        await user.click(screen.getByRole('button', { name: 'Ask' }));

        expect(onAsk).toHaveBeenCalledWith('What is inertia?');
    });

    it('ignores an empty question', async () => {
        const user = userEvent.setup();
        const onAsk = vi.fn();
        renderWithProviders(<Hero onAsk={onAsk} />);

        await user.type(screen.getByRole('textbox', { name: 'Your question' }), '   {Enter}');

        expect(onAsk).not.toHaveBeenCalled();
    });
});
