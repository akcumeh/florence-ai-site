import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test/renderWithProviders';
import { faqs } from '../content/faq';
import { links } from '../content/links';
import Faq from './Faq/Faq';
import FinalAsk from './FinalAsk/FinalAsk';
import Footer from './Footer/Footer';

describe('FAQ', () => {
    it('opens the first answer, toggles one row at a time and drops the exams question', async () => {
        const user = userEvent.setup();
        renderWithProviders(<Faq appUrl="" />);
        const buttons = screen.getAllByRole('button', { expanded: false }).concat(
            screen.getAllByRole('button', { expanded: true })
        );
        expect(buttons).toHaveLength(faqs.length);
        expect(screen.getByRole('button', { name: 'What can I ask Florence?' })).toHaveAttribute(
            'aria-expanded',
            'true'
        );
        await user.click(screen.getByRole('button', { name: 'How does Prep Mode work?' }));
        expect(screen.getByRole('button', { name: 'How does Prep Mode work?' })).toHaveAttribute(
            'aria-expanded',
            'true'
        );
        expect(screen.getByRole('button', { name: 'What can I ask Florence?' })).toHaveAttribute(
            'aria-expanded',
            'false'
        );
        expect(screen.queryByText('Will these questions appear in my exams?')).not.toBeInTheDocument();
    });

    it('sends "still stuck" to WhatsApp until the app is live', () => {
        renderWithProviders(<Faq appUrl="" />);
        expect(screen.getByRole('link', { name: 'still stuck? ask Florence' })).toHaveAttribute(
            'href',
            links.whatsapp
        );
    });
});

describe('Final ask', () => {
    it('shows the Ask bar when the app is live and chat buttons otherwise', () => {
        const { unmount } = renderWithProviders(<FinalAsk appUrl="https://app.myflorence.site" />);
        expect(screen.getByRole('heading', { name: 'Start with one question.' })).toBeInTheDocument();
        expect(screen.getByLabelText('Ask Florence a question')).toBeInTheDocument();
        unmount();
        renderWithProviders(<FinalAsk appUrl="" />);
        expect(screen.getByRole('link', { name: 'Ask on WhatsApp' })).toBeInTheDocument();
    });
});

describe('Footer', () => {
    it('has the designed links and no company number', () => {
        renderWithProviders(<Footer />);
        for (const name of ['How it works', 'FAQ', 'WhatsApp', 'Telegram']) {
            expect(screen.getByRole('link', { name })).toBeInTheDocument();
        }
        expect(screen.getByText('© 2026 Florence AI Limited')).toBeInTheDocument();
        expect(screen.queryByText(/RC/)).not.toBeInTheDocument();
    });
});
