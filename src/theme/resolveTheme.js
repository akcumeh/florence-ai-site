export const SCHEME_KEY = 'flo-scheme';
export const CONTRAST_KEY = 'flo-contrast';

export const DARK_QUERY = '(prefers-color-scheme: dark)';
export const CONTRAST_QUERY = '(prefers-contrast: more)';

export function resolveTheme({ scheme, contrast }) {
    if (scheme === 'dark') return 'dark';
    return contrast ? 'contrast' : 'afternoon';
}

function readStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

export function writeStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}

const mediaMatches = (query) =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia(query).matches
        : false;

export function getStoredScheme() {
    const saved = readStorage(SCHEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
}

export function getStoredContrast() {
    const saved = readStorage(CONTRAST_KEY);
    return saved === 'true' ? true : saved === 'false' ? false : null;
}

export function getInitialScheme() {
    return getStoredScheme() ?? (mediaMatches(DARK_QUERY) ? 'dark' : 'light');
}

export function getInitialContrast() {
    return getStoredContrast() ?? mediaMatches(CONTRAST_QUERY);
}
