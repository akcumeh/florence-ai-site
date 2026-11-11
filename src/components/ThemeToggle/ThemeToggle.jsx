import { useTheme } from '../../theme/useTheme';
import styles from './ThemeToggle.module.scss';

const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <path
            d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

const ThemeToggle = ({ className = '' }) => {
    const { scheme, toggleScheme } = useTheme();
    const isDark = scheme === 'dark';

    return (
        <button
            type="button"
            className={`${styles.toggle} ${className}`}
            onClick={toggleScheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeToggle;
