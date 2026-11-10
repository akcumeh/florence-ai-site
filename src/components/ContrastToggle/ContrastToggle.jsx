import { useTheme } from '../../theme/useTheme';
import styles from './ContrastToggle.module.scss';

const ContrastToggle = ({ className = '' }) => {
    const { contrast, setContrast } = useTheme();

    return (
        <label className={`${styles.toggle} ${className}`}>
            <input
                type="checkbox"
                className={styles.input}
                checked={contrast}
                onChange={(e) => setContrast(e.target.checked)}
            />
            <span className={styles.box} aria-hidden="true" />
            <span>Prefer high contrast</span>
        </label>
    );
};

export default ContrastToggle;
