import { useEffect, useState } from 'react';
import clip from '../../assets/v21/icon-clip.svg';
import arrow from '../../assets/v21/icon-arrow.svg';
import { appUrl as defaultAppUrl, askUrl } from '../../content/links';
import MaskIcon from '../MaskIcon/MaskIcon';
import styles from './AskBar.module.scss';

const AskBar = ({
    id,
    size = 'hero',
    value,
    onChange,
    appUrl = defaultAppUrl,
    inputRef,
    label = 'Ask Florence a question',
}) => {
    const [own, setOwn] = useState('');
    const [narrow, setNarrow] = useState(size === 'sticky');
    const text = value ?? own;

    useEffect(() => {
        if (size === 'sticky' || typeof window.matchMedia !== 'function') return undefined;
        const mq = window.matchMedia('(max-width: 899px)');
        const update = () => setNarrow(mq.matches);
        update();
        mq.addEventListener?.('change', update);
        return () => mq.removeEventListener?.('change', update);
    }, [size]);
    const setText = onChange ?? setOwn;

    const submit = (e) => {
        e.preventDefault();
        const url = askUrl(text, appUrl);
        if (url) window.location.assign(url);
    };

    return (
        <form className={`${styles.bar} ${styles[size]}`} onSubmit={submit} role="search">
            <a className={styles.attach} href={`${appUrl}/ask`} aria-label="Attach your notes">
                <MaskIcon src={clip} className={styles.clip} />
            </a>
            <label className="visually-hidden" htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                ref={inputRef}
                className={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={narrow ? 'Ask a question…' : 'Ask a question about your course…'}
                autoComplete="off"
                enterKeyHint="send"
            />
            <button type="submit" className={styles.ask}>
                Ask
                <MaskIcon src={arrow} className={styles.arrow} />
            </button>
        </form>
    );
};

export default AskBar;
