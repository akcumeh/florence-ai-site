import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import App from './App';
import { faqs } from './content/faq';
import { links } from './content/links';
import { site } from './content/site';

export function render(url) {
    return renderToString(
        <ThemeProvider>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </ThemeProvider>,
    );
}

export const structuredData = [
    {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        url: site.url,
        description: site.description,
        sameAs: [links.telegram, links.productHunt.split('?')[0]],
        founder: [
            { '@type': 'Person', name: 'Opeyemi Muyiwa-Dada', jobTitle: 'Co-founder & CEO' },
            { '@type': 'Person', name: 'Angel Umeh', jobTitle: 'Co-founder & CTO' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        url: site.url,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    },
];
