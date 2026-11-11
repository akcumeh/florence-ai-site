import whatsappIcon from '../../assets/icons/whatsapp.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import Button from '../../components/Button/Button';
import { links } from '../../content/links';
import { focusAskInput } from '../../lib/focusAskInput';
import styles from './StartFree.module.scss';

const StartFree = () => (
    <section className={styles.section} aria-labelledby="start-free-title">
        <div className={styles.card}>
            <h2 id="start-free-title" className={styles.title}>
                Start free
            </h2>
            <p className={styles.text}>Ask your questions here, or get answers on WhatsApp and Telegram.</p>
            <div className={styles.buttons}>
                <Button variant="ink" onClick={focusAskInput} className={styles.button}>
                    Ask a question
                </Button>
                <Button
                    variant="white"
                    brand="whatsapp"
                    icon={whatsappIcon}
                    href={links.whatsapp}
                    className={`${styles.button} ${styles.flat}`}
                >
                    Continue on WhatsApp
                </Button>
                <Button
                    variant="white"
                    brand="telegram"
                    icon={telegramIcon}
                    href={links.telegram}
                    className={`${styles.button} ${styles.flat} ${styles.telegram}`}
                >
                    Continue on Telegram
                </Button>
            </div>
        </div>
    </section>
);

export default StartFree;
