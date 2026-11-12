import styles from './Proof.module.scss';

const STATS = [
    { value: '5,000', label: 'registered students', short: 'students', tone: 'barSun' },
    { value: '50,000+', label: 'questions asked', short: 'questions', tone: 'barLeaf' },
    { value: 'UNILAG', label: 'ethics-cleared pilot', short: 'pilot', tone: 'barLilac' },
];

const Proof = () => (
    <section className={styles.section} aria-labelledby="proof-title">
        <h2 id="proof-title" className={styles.kicker}>
            EARLY ACCESS · PILOTING WITH STUDENTS
        </h2>
        <ul className={styles.stats}>
            {STATS.map((s) => (
                <li key={s.value} className={styles.stat}>
                    <span className={styles.value}>{s.value}</span>
                    <span className={`${styles.bar} ${styles[s.tone]}`} aria-hidden="true" />
                    <span className={styles.label}>
                        <span className={styles.long}>{s.label}</span>
                        <span className={styles.short}>{s.short}</span>
                    </span>
                </li>
            ))}
        </ul>
        <p className={styles.source}>
            <span className={styles.long}>
                Florence internal analytics, as of 18 August 2026. University of Lagos ethics approval, 14 November
                2025.
            </span>
            <span className={styles.short}>
                Florence internal analytics, 18 Aug 2026. UNILAG ethics approval, 14 Nov 2025.
            </span>
        </p>
    </section>
);

export default Proof;
