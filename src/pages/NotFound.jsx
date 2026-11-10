import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => (
    <main className={styles.page}>
        <p className={styles.brand}>
            Florence<span className={styles.star}>*</span> AI
        </p>
        <h1 className={styles.code}>
            404<span className={styles.star}>*</span>
        </h1>
        <h2 className={styles.title}>Oops! Looks like you&apos;re lost in the digital woods.</h2>
        <p className={styles.body}>
            Let&apos;s get you back to familiar ground. Head to the Florence* homepage and get back to learning.
        </p>
        <Link to="/" className={styles.button}>
            Go to homepage
        </Link>
    </main>
);

export default NotFound;
