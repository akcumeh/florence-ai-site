import whatsapp from '../../assets/icons/whatsapp.svg';
import telegram from '../../assets/icons/telegram.svg';
import { links } from '../../content/links';
import MaskIcon from '../MaskIcon/MaskIcon';
import styles from './ChatButtons.module.scss';

const ChatButtons = ({ onBand = false }) => (
    <div className={`${styles.row} ${onBand ? styles.onBand : ''}`}>
        <a className={`${styles.button} ${styles.whatsapp}`} href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <MaskIcon src={whatsapp} className={styles.icon} />
            <span className={styles.prefix}>Ask on</span> WhatsApp
        </a>
        <a className={`${styles.button} ${styles.telegram}`} href={links.telegram} target="_blank" rel="noopener noreferrer">
            <MaskIcon src={telegram} className={styles.icon} />
            <span className={styles.prefix}>Ask on</span> Telegram
        </a>
    </div>
);

export default ChatButtons;
