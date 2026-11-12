import asterisk from '../../assets/v21/logo-asterisk.svg';
import styles from './Logo.module.scss';

const Logo = ({ size = 'nav', className = '' }) => (
    <span className={`${styles.logo} ${styles[size]} ${className}`}>
        <span className={styles.word}>florence</span>
        <img className={styles.star} src={asterisk} alt="" width="15" height="14.3284" />
    </span>
);

export default Logo;
