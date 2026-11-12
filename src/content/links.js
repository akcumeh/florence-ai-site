export const links = {
    telegram: 'https://t.me/FlorenceAIBot',
    whatsapp: 'https://wa.me/message/PVXH2K3TDYTGP1',
    whatsappPrep: 'https://wa.me/message/SR25SMDIVBKQD1',
};

export const appUrl = String(import.meta.env?.VITE_APP_URL ?? '').replace(/\/+$/, '');

export function askUrl(question, base = appUrl) {
    if (!base) return '';
    const q = question.trim();
    if (!q) return '';
    return `${base}/ask?q=${encodeURIComponent(q)}&from=site`;
}

export const ASK_INPUT_ID = 'ask-question';

export const sectionIds = {
    howItWorks: 'how-it-works',
    ask: 'ask',
    faq: 'faq',
};

export const navItems = [
    { label: 'How it works', href: `#${sectionIds.howItWorks}` },
    { label: 'FAQ', href: `#${sectionIds.faq}` },
];
