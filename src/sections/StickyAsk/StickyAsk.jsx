import { useEffect, useState } from 'react';
import AskBar from '../../components/AskBar/AskBar';
import ChatButtons from '../../components/ChatButtons/ChatButtons';
import { appUrl as defaultAppUrl } from '../../content/links';
import styles from './StickyAsk.module.scss';

function useTyping() {
    const [typing, setTyping] = useState(false);
    useEffect(() => {
        const update = () => {
            const el = document.activeElement;
            setTyping(Boolean(el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')));
        };
        document.addEventListener('focusin', update);
        document.addEventListener('focusout', update);
        return () => {
            document.removeEventListener('focusin', update);
            document.removeEventListener('focusout', update);
        };
    }, []);
    return typing;
}

const StickyAsk = ({ heroRef, faqOpen = false, faqRef, appUrl = defaultAppUrl }) => {
    const [heroGone, setHeroGone] = useState(false);
    const [faqVisible, setFaqVisible] = useState(false);
    const typing = useTyping();

    useEffect(() => {
        const node = heroRef?.current;
        if (!node || typeof IntersectionObserver === 'undefined') return undefined;
        const io = new IntersectionObserver(([entry]) => setHeroGone(!entry.isIntersecting));
        io.observe(node);
        return () => io.disconnect();
    }, [heroRef]);

    useEffect(() => {
        const node = faqRef?.current;
        if (!node || typeof IntersectionObserver === 'undefined') return undefined;
        const io = new IntersectionObserver(([entry]) => setFaqVisible(entry.isIntersecting));
        io.observe(node);
        return () => io.disconnect();
    }, [faqRef]);

    const shown = heroGone && !typing && !(faqVisible && faqOpen);

    return (
        <div className={styles.sticky} data-shown={shown} aria-hidden={!shown} inert={!shown}>
            {appUrl ? <AskBar id="sticky-ask" size="sticky" appUrl={appUrl} /> : <ChatButtons />}
        </div>
    );
};

export default StickyAsk;
