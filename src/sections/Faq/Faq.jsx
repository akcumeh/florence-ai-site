import { useId, useState } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import Button from '../../components/Button/Button';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { faqs as defaultFaqs } from '../../content/faq';
import { sectionIds } from '../../content/links';
import { focusAskInput } from '../../lib/focusAskInput';
import styles from './Faq.module.scss';

const Faq = ({ items = defaultFaqs }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const baseId = useId();

    const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

    return (
        <section id={sectionIds.faq} className={`section ${styles.root}`} aria-labelledby="faq-title">
            <SectionHeader
                titleId="faq-title"
                eyebrow="FAQ"
                title="Good questions. Straight answers"
                subtitle="A few things to know before you start using Florence."
            />

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
                                        width="var(--faq-icon)"
                                        height="var(--faq-icon)"
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
                                {item.link && (
                                    <a
                                        className={styles.answerLink}
                                        href={item.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.link.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.more}>
                <p className={styles.moreText}>Still have a question?</p>
                <Button variant="ghost" onClick={focusAskInput}>
                    Ask Florence
                </Button>
            </div>
        </section>
    );
};

export default Faq;
