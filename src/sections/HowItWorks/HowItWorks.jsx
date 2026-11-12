import curl from '../../assets/v21/curl.svg';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import { sectionIds } from '../../content/links';
import styles from './HowItWorks.module.scss';

const STEPS = [
    {
        n: '01',
        tone: 'badgeSun',
        title: 'Drop in your notes',
        body: 'A PDF, slides or a photo of your notebook. Up to five at a time.',
        short: 'A PDF, slides or a photo. Up to five at a time.',
    },
    {
        n: '02',
        tone: 'badgeBrand',
        title: "Practise like it's the exam",
        body: 'Florence turns them into questions and marks each answer.',
        short: 'Florence asks the questions and marks each answer.',
    },
    {
        n: '03',
        tone: 'badgeLeaf',
        title: 'Fix what you missed',
        body: 'A clear explanation for every miss, then another go.',
        short: 'A clear explanation, then another go.',
    },
];

const HowItWorks = () => (
    <section id={sectionIds.howItWorks} className={styles.section} aria-labelledby="how-title">
        <div className={styles.inner}>
            <h2 id="how-title" className={styles.title}>
                Three steps. No all-nighter.
            </h2>
            <ol className={styles.steps}>
                {STEPS.map((step) => (
                    <li key={step.n} className={styles.step}>
                        <span className={`${styles.badge} ${styles[step.tone]}`} aria-hidden="true">
                            {step.n}
                        </span>
                        <div className={styles.text}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.body}>
                                <span className={styles.long}>{step.body}</span>
                                <span className={styles.short}>{step.short}</span>
                            </p>
                        </div>
                    </li>
                ))}
                <MaskIcon src={curl} className={styles.curl} />
            </ol>
        </div>
    </section>
);

export default HowItWorks;
