import { sectionIds } from '../../content/links';
import { site } from '../../content/site';
import styles from './Contact.module.scss';

const Contact = () => (
    <section id={sectionIds.contact} className={styles.section} aria-labelledby="contact-title">
        <div className={styles.inner}>
            <div>
                <p className={styles.eyebrow}>Contact Us</p>
                <h2 id="contact-title" className={styles.title}>
                    Talk to the people behind Florence.
                </h2>
            </div>
            <p className={styles.aside}>
                <span>Questions, feedback or a partnership?</span> <span>
                    Get in touch at{' '}
                    <a href={`mailto:${site.email}`} className={styles.email}>
                        {site.email}
                    </a>
                </span>
            </p>
        </div>
    </section>
);

export default Contact;
