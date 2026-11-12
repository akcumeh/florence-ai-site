import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test/renderWithProviders';
import Product from './Product/Product';
import HowItWorks from './HowItWorks/HowItWorks';
import Proof from './Proof/Proof';

describe('Product', () => {
    it('starts on Prep Mode and switches to Ask by click and by arrow key', async () => {
        const user = userEvent.setup();
        renderWithProviders(<Product />);
        const prep = screen.getByRole('tab', { name: 'Prep Mode' });
        const ask = screen.getByRole('tab', { name: 'Ask' });
        expect(prep).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('What is the SI unit of force?')).toBeInTheDocument();

        await user.click(ask);
        expect(ask).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('Why does a ball thrown upward slow down?')).toBeInTheDocument();
        expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', ask.id);

        ask.focus();
        await user.keyboard('{ArrowRight}');
        expect(prep).toHaveAttribute('aria-selected', 'true');
        expect(prep).toHaveFocus();
    });
});

describe('How it works', () => {
    it('lists the three steps under the anchor', () => {
        const { container } = renderWithProviders(<HowItWorks />);
        expect(container.querySelector('#how-it-works')).not.toBeNull();
        expect(screen.getByRole('heading', { name: 'Three steps. No all-nighter.' })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(3);
        expect(screen.getByRole('heading', { name: "Practise like it's the exam" })).toBeInTheDocument();
    });
});

describe('Proof', () => {
    it('shows the real stats and their source', () => {
        renderWithProviders(<Proof />);
        expect(screen.getByText('5,000')).toBeInTheDocument();
        expect(screen.getByText('50,000+')).toBeInTheDocument();
        expect(screen.getByText('UNILAG')).toBeInTheDocument();
        expect(screen.getByText(/as of 18 August 2026/)).toBeInTheDocument();
    });
});
