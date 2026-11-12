import { useId, useState } from 'react';
import plusIcon from '../../assets/v21/icon-plus.svg';
import minusIcon from '../../assets/v21/icon-minus.svg';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import { faqs as defaultFaqs } from '../../content/faq';
import { appUrl as defaultAppUrl, links, sectionIds } from '../../content/links';
import { focusAskInput } from '../../lib/focusAskInput';
import styles from './Faq.module.scss';

const Faq = ({ items = defaultFaqs, appUrl = defaultAppUrl, onOpenChange }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const baseId = useId();

    const toggle = (i) =>
        setOpenIndex((current) => {
            const next = current === i ? -1 : i;
            onOpenChange?.(next !== -1);
            return next;
        });

    return (
        <section id={sectionIds.faq} className={styles.section} aria-labelledby="faq-title">
            <div className={styles.inner}>
                <h2 id="faq-title" className={styles.title}>
                    Questions? Answered.
                </h2>
                <div className={styles.list}>
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        const buttonId = `${baseId}-q${i}`;
                        const panelId = `${baseId}-a${i}`;
                        return (
                            <div key={item.question} className={styles.row}>
                                <h3 className={styles.heading}>
                                    <button
                                        type="button"
                                        id={buttonId}
                                        className={styles.trigger}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => toggle(i)}
                                    >
                                        <span>{item.question}</span>
                                        <MaskIcon
                                            src={isOpen ? minusIcon : plusIcon}
                                            className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon}
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={styles.panel}
                                    hidden={!isOpen}
                                >
                                    <p>{item.answer}</p>
                                    {item.link ? (
                                        <a
                                            className={styles.answerLink}
                                            href={item.link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.link.label}
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {appUrl ? (
                    <button type="button" className={styles.stuck} onClick={focusAskInput}>
                        still stuck? ask Florence
                    </button>
                ) : (
                    <a className={styles.stuck} href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                        still stuck? ask Florence
                    </a>
                )}
            </div>
        </section>
    );
};

export default Faq;
