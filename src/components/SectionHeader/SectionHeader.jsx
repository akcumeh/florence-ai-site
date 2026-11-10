import styles from './SectionHeader.module.scss';

const SectionHeader = ({ eyebrow, title, subtitle, titleId, titleFont = 'inter', textFont = 'inter' }) => (
    <div className={styles.header}>
        <p className={`${styles.eyebrow} ${styles[textFont]}`}>{eyebrow}</p>
        <h2 id={titleId} className={`${styles.title} ${styles[titleFont]}`}>
            {title}
        </h2>
        {subtitle && <p className={`${styles.subtitle} ${styles[textFont]}`}>{subtitle}</p>}
    </div>
);

export default SectionHeader;
