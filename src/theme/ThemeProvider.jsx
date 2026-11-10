import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import {
    CONTRAST_KEY,
    CONTRAST_QUERY,
    DARK_QUERY,
    SCHEME_KEY,
    getInitialContrast,
    getInitialScheme,
    getStoredContrast,
    getStoredScheme,
    resolveTheme,
    writeStorage,
} from './resolveTheme';

function useMediaFollow(query, isOverridden, onChange) {
    useEffect(() => {
        if (typeof window.matchMedia !== 'function') return undefined;
        const mq = window.matchMedia(query);
        const handle = (e) => {
            if (!isOverridden()) onChange(e.matches);
        };
        mq.addEventListener('change', handle);
        return () => mq.removeEventListener('change', handle);
    }, [query, isOverridden, onChange]);
}

const hasStoredScheme = () => getStoredScheme() !== null;
const hasStoredContrast = () => getStoredContrast() !== null;

export function ThemeProvider({ children }) {
    const [scheme, setScheme] = useState(getInitialScheme);
    const [contrast, setContrastState] = useState(getInitialContrast);
    const theme = resolveTheme({ scheme, contrast });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const followDark = useCallback((matches) => setScheme(matches ? 'dark' : 'light'), []);
    useMediaFollow(DARK_QUERY, hasStoredScheme, followDark);
    useMediaFollow(CONTRAST_QUERY, hasStoredContrast, setContrastState);

    const toggleScheme = useCallback(() => {
        setScheme((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            writeStorage(SCHEME_KEY, next);
            return next;
        });
    }, []);

    const setContrast = useCallback((value) => {
        writeStorage(CONTRAST_KEY, String(value));
        setContrastState(value);
    }, []);

    const value = useMemo(
        () => ({ theme, scheme, contrast, toggleScheme, setContrast }),
        [theme, scheme, contrast, toggleScheme, setContrast],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
