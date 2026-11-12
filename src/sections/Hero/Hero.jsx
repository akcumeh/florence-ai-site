import { useState } from 'react';
import ribbon from '../../assets/v21/ribbon-hero.svg';
import sunStar from '../../assets/v21/asterisk-hero-sun.svg';
import blueStar from '../../assets/v21/asterisk-hero-blue.svg';
import mSunStar from '../../assets/v21/m-asterisk-hero-sun.svg';
import mBlueStar from '../../assets/v21/m-asterisk-hero-blue.svg';
import underline from '../../assets/v21/underline.svg';
import mUnderline from '../../assets/v21/m-underline.svg';
import dotLeaf from '../../assets/v21/dot-leaf.svg';
import dotSky from '../../assets/v21/dot-sky.svg';
import AskBar from '../../components/AskBar/AskBar';
import ChatButtons from '../../components/ChatButtons/ChatButtons';
import MaskIcon from '../../components/MaskIcon/MaskIcon';
import { appUrl as defaultAppUrl, ASK_INPUT_ID, links } from '../../content/links';
import styles from './Hero.module.scss';

const CHIPS = [
    { text: 'Explain osmosis simply', tone: 'chipSun' },
    { text: 'Quiz me on my BIO 102 notes', tone: 'chipLeaf' },
    { text: 'Why does a ball thrown up slow down?', tone: 'chipLilac' },
];

const Hero = ({ appUrl = defaultAppUrl, barRef }) => {
    const [question, setQuestion] = useState('');

    const fill = (text) => {
        setQuestion(text);
        document.getElementById(ASK_INPUT_ID)?.focus();
    };

    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.decor} aria-hidden="true">
                <MaskIcon src={ribbon} className={styles.ribbon} />
                <MaskIcon src={sunStar} className={styles.starSun} />
                <MaskIcon src={blueStar} className={styles.starBlue} />
                <MaskIcon src={mSunStar} className={styles.mStarSun} />
                <MaskIcon src={mBlueStar} className={styles.mStarBlue} />
            </div>
            <div className={styles.inner}>
                <h1 id="hero-title" className={styles.title}>
                    Understand your course. <br className={styles.break} />
                    Master your exams.
                </h1>
                <MaskIcon src={underline} className={styles.underline} />
                <MaskIcon src={mUnderline} className={styles.mUnderline} />
                <p className={styles.lead}>
                    <span className={styles.leadLong}>
                        Ask anything, or turn your notes into practice questions. Every answer explained step by
                        step.
                    </span>
                    <span className={styles.leadShort}>Ask anything, or turn your notes into practice questions.</span>
                </p>
                <div className={styles.ask} id="ask" ref={barRef}>
                    {appUrl ? (
                        <AskBar id={ASK_INPUT_ID} value={question} onChange={setQuestion} appUrl={appUrl} />
                    ) : (
                        <ChatButtons />
                    )}
                </div>
                {appUrl ? (
                    <div className={styles.chips}>
                        {CHIPS.map((chip) => (
                            <button
                                key={chip.text}
                                type="button"
                                className={`${styles.chip} ${styles[chip.tone]}`}
                                onClick={() => fill(chip.text)}
                            >
                                {chip.text}
                            </button>
                        ))}
                    </div>
                ) : null}
                <p className={styles.handoff}>
                    <span>or continue on</span>
                    <a
                        className={`${styles.chat} ${styles.wa}`}
                        href={links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={dotLeaf} alt="" width="10" height="10" />
                        <span className={styles.chatLabel}>WhatsApp</span>
                    </a>
                    <a
                        className={`${styles.chat} ${styles.tg}`}
                        href={links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={dotSky} alt="" width="10" height="10" />
                        <span className={styles.chatLabel}>Telegram</span>
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Hero;
