import { useEffect, useId, useState } from 'react';
import menu from '../../assets/v21/icon-menu.svg';
import Logo from '../../components/Logo/Logo';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import { appUrl as defaultAppUrl, links, navItems } from '../../content/links';
import styles from './Nav.module.scss';

const Nav = ({ appUrl = defaultAppUrl }) => {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={styles.nav}>
            <a href="/" className={styles.home} aria-label="Florence home">
                <Logo />
            </a>
            <nav aria-label="Main" className={styles.links}>
                {navItems.map((item) => (
                    <a key={item.href} href={item.href} className={styles.link}>
                        {item.label}
                    </a>
                ))}
                {appUrl ? (
                    <a href={`${appUrl}/`} className={styles.login}>
                        Log in
                    </a>
                ) : (
                    <>
                        <a href={links.whatsapp} className={styles.login} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                        <a href={links.telegram} className={styles.login} target="_blank" rel="noopener noreferrer">
                            Telegram
                        </a>
                    </>
                )}
            </nav>
            <div className={styles.mobile}>
                {appUrl ? (
                    <a href={`${appUrl}/`} className={styles.login}>
                        Log in
                    </a>
                ) : null}
                <button
                    type="button"
                    className={styles.menuButton}
                    aria-expanded={open}
                    aria-controls={panelId}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen((v) => !v)}
                >
                    <MaskIcon src={menu} className={styles.menuIcon} />
                </button>
            </div>
            <div id={panelId} className={styles.panel} hidden={!open}>
                {navItems.map((item) => (
                    <a key={item.href} href={item.href} className={styles.panelLink} onClick={close}>
                        {item.label}
                    </a>
                ))}
                <a href={links.whatsapp} className={styles.panelLink} target="_blank" rel="noopener noreferrer" onClick={close}>
                    WhatsApp
                </a>
                <a href={links.telegram} className={styles.panelLink} target="_blank" rel="noopener noreferrer" onClick={close}>
                    Telegram
                </a>
            </div>
        </header>
    );
};

export default Nav;
