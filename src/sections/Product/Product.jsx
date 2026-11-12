import { useId, useRef, useState } from 'react';
import check from '../../assets/v21/scribble-check.svg';
import send from '../../assets/v21/icon-send.svg';
import styles from './Product.module.scss';

const TABS = [
    { id: 'prep', label: 'Prep Mode' },
    { id: 'ask', label: 'Ask' },
];

const OPTIONS = ['Joule (J)', 'Pascal (Pa)', 'Watt (W)'];

const STEPS = [
    { tone: 'stepSun', text: 'Gravity pulls down at about 9.8 m/s², even on the way up.' },
    { tone: 'stepBrand', text: 'That pull acts against the motion, so speed drops every second.' },
    { tone: 'stepLeaf', text: 'At the top, speed is zero. Then gravity speeds it back down.' },
];

function PrepCard() {
    return (
        <div className={`${styles.stage} ${styles.stagePrep}`}>
            <span className={`${styles.back} ${styles.backLilac}`} aria-hidden="true" />
            <span className={`${styles.back} ${styles.backSun}`} aria-hidden="true" />
            <div className={styles.card}>
                <p className={styles.cardHead}>
                    <span className={styles.course}>
                        PHY 101 · <span className={styles.wide}>PREP MODE</span>
                        <span className={styles.narrow}>3 / 10</span>
                    </span>
                    <span className={`${styles.count} ${styles.wide}`}>3 / 10</span>
                </p>
                <p className={styles.question}>What is the SI unit of force?</p>
                <div className={`${styles.option} ${styles.correct}`}>
                    <span>Newton (N)</span>
                    <span className={styles.correctLabel}>Correct</span>
                </div>
                {OPTIONS.map((o, i) => (
                    <div key={o} className={`${styles.option} ${i === 2 ? styles.wide : ''}`}>
                        <span>{o}</span>
                    </div>
                ))}
                <p className={`${styles.note} ${styles.wide}`}>Force = mass × acceleration, so 1 N = 1 kg·m/s².</p>
            </div>
            <span className={`${styles.sticker} ${styles.stickerCorrect}`} aria-hidden="true">
                Correct!
                <span className={styles.badge}>
                    <img src={check} alt="" width="30.72" height="30.72" />
                </span>
            </span>
        </div>
    );
}

function AskCard() {
    return (
        <div className={`${styles.stage} ${styles.stageAsk}`}>
            <span className={`${styles.back} ${styles.backBlue}`} aria-hidden="true" />
            <span className={`${styles.back} ${styles.backLilacAsk}`} aria-hidden="true" />
            <div className={`${styles.card} ${styles.askCard}`}>
                <p className={styles.cardHead}>
                    <span className={styles.course}>PHY 101 · ASK</span>
                </p>
                <div className={styles.bubbleRow}>
                    <p className={styles.bubble}>Why does a ball thrown upward slow down?</p>
                </div>
                <div className={styles.answer}>
                    <p className={styles.who}>
                        Florence<span className={styles.star}>*</span>
                    </p>
                    {STEPS.map((step, i) => (
                        <div key={step.text} className={styles.step}>
                            <span className={`${styles.dot} ${styles[step.tone]}`}>{i + 1}</span>
                            <p>{step.text}</p>
                        </div>
                    ))}
                    <span className={styles.grounded}>GROUNDED IN YOUR NOTES · PHY 101, LECTURE 4</span>
                </div>
                <div className={styles.followUp}>
                    <span>Ask a follow-up…</span>
                    <span className={styles.send}>
                        <img src={send} alt="" width="16" height="16" />
                    </span>
                </div>
            </div>
            <span className={`${styles.sticker} ${styles.stickerSteps}`} aria-hidden="true">
                Step by step
            </span>
        </div>
    );
}

const Product = () => {
    const [tab, setTab] = useState('prep');
    const baseId = useId();
    const refs = useRef([]);

    const onKey = (e, i) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const next = (i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length;
        setTab(TABS[next].id);
        refs.current[next]?.focus();
    };

    return (
        <section className={styles.product} aria-labelledby="product-title">
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>ONE FLORENCE, TWO WAYS TO STUDY</p>
                    <h2 id="product-title" className={styles.title}>
                        Your notes in. Exam-ready answers out.
                    </h2>
                    <div className={styles.switch} role="tablist" aria-label="Ways to study">
                        {TABS.map((t, i) => (
                            <button
                                key={t.id}
                                ref={(el) => {
                                    refs.current[i] = el;
                                }}
                                type="button"
                                role="tab"
                                id={`${baseId}-tab-${t.id}`}
                                aria-selected={tab === t.id}
                                aria-controls={`${baseId}-panel`}
                                tabIndex={tab === t.id ? 0 : -1}
                                className={tab === t.id ? `${styles.tab} ${styles.tabOn}` : styles.tab}
                                onClick={() => setTab(t.id)}
                                onKeyDown={(e) => onKey(e, i)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                    <p className={`${styles.body} ${styles.wide}`}>
                        Prep Mode turns a PDF or a photo of your notes into questions, marks every answer and
                        explains what you missed.
                    </p>
                    <p className={`${styles.body} ${styles.wide}`}>
                        Ask gives you step-by-step answers, grounded in your course material.
                    </p>
                </div>
                <div
                    id={`${baseId}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${baseId}-tab-${tab}`}
                    className={styles.panel}
                >
                    {tab === 'prep' ? <PrepCard /> : <AskCard />}
                </div>
                <p className={`${styles.body} ${styles.narrow}`}>
                    Prep Mode turns your notes into questions and marks every answer. Ask gives step-by-step
                    answers, grounded in your course.
                </p>
            </div>
        </section>
    );
};

export default Product;
