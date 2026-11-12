import ribbon from '../../assets/v21/ribbon-band.svg';
import star from '../../assets/v21/asterisk-band-sun.svg';
import mStar from '../../assets/v21/m-asterisk-band-sun.svg';
import AskBar from '../../components/AskBar/AskBar';
import ChatButtons from '../../components/ChatButtons/ChatButtons';
import { appUrl as defaultAppUrl } from '../../content/links';
import styles from './FinalAsk.module.scss';

const FinalAsk = ({ appUrl = defaultAppUrl }) => (
    <section className={styles.band} aria-labelledby="final-title">
        <img className={styles.ribbon} src={ribbon} alt="" width="1816.68" height="605.828" />
        <img className={styles.star} src={star} alt="" width="320" height="305.672" />
        <img className={styles.mStar} src={mStar} alt="" width="150" height="143.284" />
        <div className={styles.inner}>
            <h2 id="final-title" className={styles.title}>
                Start with one question.
            </h2>
            <p className={styles.lead}>Ask it here, or get answers on WhatsApp and Telegram.</p>
            <div className={styles.bar}>
                {appUrl ? (
                    <AskBar id="final-ask" size="final" appUrl={appUrl} />
                ) : (
                    <ChatButtons onBand />
                )}
            </div>
        </div>
    </section>
);

export default FinalAsk;
