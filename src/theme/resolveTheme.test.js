import { resolveTheme, getInitialScheme, getInitialContrast, DARK_QUERY, CONTRAST_QUERY } from './resolveTheme';

describe('resolveTheme', () => {
    it.each([
        [{ scheme: 'light', contrast: false }, 'afternoon'],
        [{ scheme: 'light', contrast: true }, 'contrast'],
        [{ scheme: 'dark', contrast: false }, 'dark'],
        [{ scheme: 'dark', contrast: true }, 'dark'],
    ])('%o -> %s', (input, expected) => {
        expect(resolveTheme(input)).toBe(expected);
    });
});

describe('initial values', () => {
    afterEach(() => {
        window.__mediaMatches = {};
    });

    it('follows the OS when nothing is stored', () => {
        window.__mediaMatches = { [DARK_QUERY]: true, [CONTRAST_QUERY]: true };
        expect(getInitialScheme()).toBe('dark');
        expect(getInitialContrast()).toBe(true);
    });

    it('prefers the stored choice over the OS', () => {
        window.__mediaMatches = { [DARK_QUERY]: true, [CONTRAST_QUERY]: true };
        localStorage.setItem('flo-scheme', 'light');
        localStorage.setItem('flo-contrast', 'false');
        expect(getInitialScheme()).toBe('light');
        expect(getInitialContrast()).toBe(false);
    });

    it('ignores junk in storage', () => {
        localStorage.setItem('flo-scheme', 'purple');
        expect(getInitialScheme()).toBe('light');
    });
});
