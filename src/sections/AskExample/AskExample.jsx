import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { sectionIds } from '../../content/links';
import { focusAskInput } from '../../lib/focusAskInput';
import styles from './AskExample.module.scss';

const answer = [
    'Gravity pulls on the ball the whole time. Here is the reasoning:',
    '1. Gravity acts downward at about 9.8 m/s², even while the ball is rising.',
    '2. On the way up, that pull works against the motion, so the ball loses about 9.8 m/s of speed every second.',
    '3. At the top its speed is zero for an instant. Then gravity speeds it back up on the way down.',
];

const AskExample = () => (
    <section id={sectionIds.ask} className={`section ${styles.root}`} aria-labelledby="ask-title">
        <SectionHeader
            titleId="ask-title"
            titleFont="figtree"
            eyebrow="Ask Florence"
            title="A clear answer is one question away"
            subtitle="Ask about a topic, a formula or a concept you’re still untangling"
        />

        <figure className={styles.card} aria-label="Example answer">
            <p className={styles.label}>EXAMPLE</p>
            <div className={styles.questionRow}>
                <p className={styles.question}>Why does a ball thrown upward slow down before it falls?</p>
            </div>
            <div className={styles.answer}>
                <p className={styles.author}>
                    Florence<span className={styles.star}>*</span>
                </p>
                {answer.map((line) => (
                    <p key={line} className={styles.line}>
                        {line}
                    </p>
                ))}
            </div>
            <p className={styles.chip}>Grounded in your notes: PHY 101, Lecture 4</p>
        </figure>

        <div className="section-action">
            <Button variant="solid" onClick={focusAskInput}>
                Ask a question
            </Button>
        </div>
    </section>
);

export default AskExample;
