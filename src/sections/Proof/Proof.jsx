import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { testimonials } from '../../content/testimonials';
import styles from './Proof.module.scss';

const Proof = ({ items = testimonials }) => {
    if (!items.length) return null;

    return (
        <section className={`section ${styles.root}`} aria-labelledby="proof-title">
            <SectionHeader
                titleId="proof-title"
                titleFont="figtree"
                textFont="figtree"
                eyebrow="Early access"
                title="Piloting with students"
                subtitle="Real feedback from the first students using Florence."
            />
            <ul className={styles.cards}>
                {items.map((item) => (
                    <li key={`${item.name}-${item.quote}`} className={styles.card}>
                        <blockquote className={styles.quote}>“{item.quote}”</blockquote>
                        <p className={styles.attribution}>
                            {item.name}
                            {'  ·  '}
                            {item.course}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Proof;
