import Logo from '../../components/Logo/Logo';
import { links, sectionIds } from '../../content/links';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <a href="/" className={styles.home} aria-label="Florence home">
            <Logo size="footer" />
        </a>
        <nav aria-label="Footer" className={styles.links}>
            <a href={`#${sectionIds.howItWorks}`}>How it works</a>
            <a href={`#${sectionIds.faq}`}>FAQ</a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
            </a>
            <a href={links.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
            </a>
            <span className={styles.break} aria-hidden="true" />
            <a aria-disabled="true">Privacy</a>
            <a aria-disabled="true">Terms</a>
        </nav>
        <p className={styles.copy}>© 2026 Florence AI Limited</p>
    </footer>
);

export default Footer;
