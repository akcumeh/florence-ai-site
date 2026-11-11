import wordmark from '../../assets/brand/wordmark-hero.svg';
import folders from '../../assets/images/folder-cluster.webp';
import Button from '../../components/Button/Button';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import AskForm from '../../components/AskForm/AskForm';
import { ASK_INPUT_ID, links, navItems } from '../../content/links';
import styles from './Hero.module.scss';

const Hero = ({ onAsk }) => (
    <header className={styles.wrap}>
        <div className={styles.card}>
            <div className={styles.bar}>
                <a href="/" className={styles.logo}>
                    <img src={wordmark} alt="Florence" width="105.5" height="30" />
                </a>

                <nav aria-label="Main" className={styles.nav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className={styles.navLink}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <Button variant="white" brand="whatsapp" href={links.whatsapp} className={styles.action}>
                        Whatsapp
                    </Button>
                    <Button variant="glass" brand="telegram" href={links.telegram} className={styles.action}>
                        Telegram
                    </Button>
                    <ThemeToggle className={styles.toggle} />
                </div>
            </div>

            <div className={styles.body}>
                <h1 className={styles.title}>
                    <span>Understand your course.</span> <span>Master your exams.</span>
                </h1>
                <AskForm onAsk={onAsk} id={ASK_INPUT_ID} className={styles.form} />
                <p className={styles.caption}>
                    Ask questions here, or get answers on{' '}
                    <a
                        href={links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.captionLink} ${styles.captionWhatsapp}`}
                    >
                        WhatsApp
                    </a>{' '}
                    and{' '}
                    <a
                        href={links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.captionLink} ${styles.captionTelegram}`}
                    >
                        Telegram
                    </a>
                </p>
            </div>

            <img
                className={styles.folders}
                src={folders}
                alt=""
                width="1383"
                height="461"
                fetchPriority="high"
            />
        </div>
    </header>
);

export default Hero;
