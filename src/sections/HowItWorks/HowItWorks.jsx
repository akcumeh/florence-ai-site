import docIcon from '../../assets/icons/doc.svg';
import gridIcon from '../../assets/icons/grid.svg';
import bubbleIcon from '../../assets/icons/bubble.svg';
import Button from '../../components/Button/Button';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { sectionIds } from '../../content/links';
import { focusAskInput } from '../../lib/focusAskInput';
import styles from './HowItWorks.module.scss';

const steps = [
    {
        icon: docIcon,
        size: [40, 51],
        title: 'Upload your material',
        lines: ['Add your course PDF or exam notes.'],
    },
    {
        icon: gridIcon,
        size: [44, 48],
        title: 'Get questions to practise',
        lines: ['Florence turns the material into focused', 'exam questions.'],
    },
    {
        icon: bubbleIcon,
        size: [43, 45],
        title: 'See the answers clearly',
        lines: ['Check your answers, then understand why.'],
    },
];

const HowItWorks = () => (
    <section id={sectionIds.howItWorks} className="section" aria-labelledby="how-it-works-title">
        <SectionHeader
            titleId="how-it-works-title"
            eyebrow="How it works"
            title="From your notes to exam-ready"
            subtitle="Upload your material. Practice what matters. Understand every answer."
        />

        <ol className={styles.steps}>
            {steps.map((step, i) => (
                <li key={step.title} className={styles.step}>
                    <MaskIcon
                        src={step.icon}
                        width={`calc(${step.size[0]}px * var(--icon-scale))`}
                        height={`calc(${step.size[1]}px * var(--icon-scale))`}
                        className={styles.icon}
                    />
                    <h3 className={styles.title}>
                        <span className={styles.number}>{i + 1}.</span>
                        {step.title}
                    </h3>
                    <p className={styles.description}>
                        {step.lines.map((line, j) => (
                            <span key={line}>
                                {j > 0 && ' '}
                                {line}
                            </span>
                        ))}
                    </p>
                </li>
            ))}
        </ol>

        <div className="section-action">
            <Button variant="solid" onClick={focusAskInput}>
                Try it now
            </Button>
        </div>
    </section>
);

export default HowItWorks;
