import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test/renderWithProviders';
import { ASK_INPUT_ID } from '../content/links';
import HowItWorks from './HowItWorks/HowItWorks';
import AskExample from './AskExample/AskExample';
import StartFree from './StartFree/StartFree';

const withAskInput = (ui) => (
    <>
        <input id={ASK_INPUT_ID} aria-label="Your question" />
        {ui}
    </>
);

describe('How it works', () => {
    it('lists the three numbered steps in order', () => {
        renderWithProviders(<HowItWorks />);
        const section = screen.getByRole('region', { name: 'From your notes to exam-ready' });
        expect(section).toHaveAttribute('id', 'how-it-works');
        const steps = within(section).getAllByRole('listitem');
        expect(steps.map((s) => within(s).getByRole('heading', { level: 3 }).textContent)).toEqual([
            '1.Upload your material',
            '2.Get questions to practise',
            '3.See the answers clearly',
        ]);
    });

    it('"Try it now" focuses the hero question box', async () => {
        const user = userEvent.setup();
        renderWithProviders(withAskInput(<HowItWorks />));
        await user.click(screen.getByRole('button', { name: 'Try it now' }));
        expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveFocus();
    });
});

describe('Ask example', () => {
    it('shows the example question, answer and source', () => {
        renderWithProviders(<AskExample />);
        const card = screen.getByRole('figure', { name: 'Example answer' });
        expect(within(card).getByText('Why does a ball thrown upward slow down before it falls?')).toBeInTheDocument();
        expect(within(card).getByText(/9\.8 m\/s²/)).toBeInTheDocument();
        expect(within(card).getByText('Grounded in your notes: PHY 101, Lecture 4')).toBeInTheDocument();
    });

    it('uses the corrected title', () => {
        renderWithProviders(<AskExample />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A clear answer is one question away');
    });

    it('"Ask a question" focuses the hero question box', async () => {
        const user = userEvent.setup();
        renderWithProviders(withAskInput(<AskExample />));
        await user.click(screen.getByRole('button', { name: 'Ask a question' }));
        expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveFocus();
    });
});

describe('Start free', () => {
    it('offers ask, WhatsApp and Telegram', () => {
        renderWithProviders(<StartFree />);
        expect(screen.getByRole('heading', { name: 'Start free' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Ask a question' })).toBeInTheDocument();
        expect(screen.getByText('Continue on WhatsApp')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Continue on Telegram' })).toHaveAttribute(
            'href',
            'https://t.me/FlorenceAIBot',
        );
    });
});
