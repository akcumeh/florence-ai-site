import wordmark from '../../assets/brand/wordmark.svg';
import ContrastToggle from '../../components/ContrastToggle/ContrastToggle';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import { sectionIds } from '../../content/links';
import { team } from '../../content/team';
import styles from './Footer.module.scss';

const footerLinks = [
    { label: 'How it works', href: `#${sectionIds.howItWorks}` },
    { label: 'FAQ', href: `#${sectionIds.faq}` },
    { label: 'Contact us', href: `#${sectionIds.contact}` },
];

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.grid}>
            <div className={styles.brand}>
                <MaskIcon src={wordmark} label="Florence" className={styles.wordmark} />
                <p className={styles.tagline}>
                    <span>Understand your course.</span> <span>Master your exams.</span>
                </p>
            </div>

            {team.map((person) => (
                <div key={person.name} className={styles.person}>
                    <p className={styles.name}>{person.name}</p>
                    <p className={styles.role}>{person.role}</p>
                    <ul className={styles.contacts}>
                        {person.contacts.map((c) => (
                            <li key={c.label}>
                                <a
                                    href={c.href}
                                    className={styles.link}
                                    aria-label={`${c.label} ${person.name}`}
                                    {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {c.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <nav aria-label="Footer" className={styles.nav}>
                <ul className={styles.navList}>
                    {footerLinks.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <ContrastToggle className={styles.contrast} />
            </nav>
        </div>

        <div className={styles.legal}>
            <p>2026 Florence AI. All rights reserved.</p>
            <div className={styles.legalLinks}>
                <a className={styles.legalLink}>Privacy policy</a>
                <a className={styles.legalLink}>Terms of use</a>
            </div>
        </div>
    </footer>
);

export default Footer;
