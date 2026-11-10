import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test/renderWithProviders';
import Faq from './Faq/Faq';
import Proof from './Proof/Proof';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from '../pages/Home';

describe('FAQ accordion', () => {
    const question = (name) => screen.getByRole('button', { name });

    it('opens the first question on load', () => {
        renderWithProviders(<Faq />);
        expect(question('What can I ask Florence?')).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByText(/simplify an explanation/)).toBeVisible();
        expect(question('Is Florence free to use?')).toHaveAttribute('aria-expanded', 'false');
    });

    it('keeps only one answer open at a time', async () => {
        const user = userEvent.setup();
        renderWithProviders(<Faq />);

        await user.click(question('Is Florence free to use?'));

        expect(question('Is Florence free to use?')).toHaveAttribute('aria-expanded', 'true');
        expect(question('What can I ask Florence?')).toHaveAttribute('aria-expanded', 'false');
        expect(screen.getByText(/simplify an explanation/)).not.toBeVisible();
    });

    it('closes an open answer when clicked again', async () => {
        const user = userEvent.setup();
        renderWithProviders(<Faq />);

        await user.click(question('What can I ask Florence?'));

        expect(question('What can I ask Florence?')).toHaveAttribute('aria-expanded', 'false');
    });

    it('links each question to its answer panel', () => {
        renderWithProviders(<Faq />);
        const btn = question('What can I ask Florence?');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        expect(panel).toHaveAttribute('role', 'region');
        expect(panel).toHaveAttribute('aria-labelledby', btn.id);
    });

    it('lists all seven questions', () => {
        renderWithProviders(<Faq />);
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(7);
    });
});

describe('Proof', () => {
    it('renders nothing until there are real quotes', () => {
        const { container } = renderWithProviders(<Proof />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders one card per quote', () => {
        renderWithProviders(
            <Proof
                items={[
                    { quote: 'Helped me pass.', name: 'Ada', course: 'PHY 101' },
                    { quote: 'Clear answers.', name: 'Tobi', course: 'MTH 102' },
                ]}
            />,
        );
        expect(screen.getByRole('heading', { name: 'Piloting with students' })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(screen.getByText('“Helped me pass.”')).toBeInTheDocument();
    });
});

describe('Contact and footer', () => {
    it('has the contact anchor target', () => {
        renderWithProviders(<Contact />);
        expect(screen.getByRole('region', { name: 'Talk to the people behind Florence.' })).toHaveAttribute(
            'id',
            'contact',
        );
    });

    it('lists both founders with their contact links', () => {
        renderWithProviders(<Footer />);
        expect(screen.getByText('Co-founder & CEO')).toBeInTheDocument();
        expect(screen.getByText('Co-founder & CTO')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Mail Opeyemi Muyiwa-Dada' })).toHaveAttribute(
            'href',
            'mailto:opeyemi.muyiwa.dada2002@gmail.com',
        );
        expect(screen.getByRole('link', { name: 'Call Opeyemi Muyiwa-Dada' })).toHaveAttribute(
            'href',
            'tel:+2348143770724',
        );
        expect(screen.getByRole('link', { name: 'Mail Angel Umeh' })).toHaveAttribute('href', 'mailto:akcumeh@gmail.com');
    });

    it('has footer nav, the contrast checkbox and the wordmark', () => {
        renderWithProviders(<Footer />);
        const nav = screen.getByRole('navigation', { name: 'Footer' });
        expect(within(nav).getByRole('link', { name: 'FAQ' })).toHaveAttribute('href', '#faq');
        expect(within(nav).getByRole('checkbox', { name: /prefer high contrast/i })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Florence' })).toBeInTheDocument();
    });
});

describe('Home page', () => {
    it('stacks the sections in design order', () => {
        renderWithProviders(<Home />);
        expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
            'From your notes to exam-ready',
            'A clear answer is one question away',
            'Start free',
            'Good questions. Straight answers',
            'Talk to the people behind Florence.',
        ]);
    });

    it('has a target for every nav anchor', () => {
        renderWithProviders(<Home />);
        const nav = screen.getByRole('navigation', { name: 'Main' });
        for (const link of within(nav).getAllByRole('link')) {
            expect(document.querySelector(link.getAttribute('href'))).not.toBeNull();
        }
    });
});
