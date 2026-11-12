import { useRef, useState } from 'react';
import Nav from '../sections/Nav/Nav';
import Hero from '../sections/Hero/Hero';
import Product from '../sections/Product/Product';
import HowItWorks from '../sections/HowItWorks/HowItWorks';
import Proof from '../sections/Proof/Proof';
import Faq from '../sections/Faq/Faq';
import FinalAsk from '../sections/FinalAsk/FinalAsk';
import Footer from '../sections/Footer/Footer';
import StickyAsk from '../sections/StickyAsk/StickyAsk';
import { appUrl as defaultAppUrl } from '../content/links';

const Home = ({ appUrl = defaultAppUrl }) => {
    const heroBar = useRef(null);
    const faqRef = useRef(null);
    const [faqOpen, setFaqOpen] = useState(true);

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Nav appUrl={appUrl} />
            <main id="main">
                <Hero appUrl={appUrl} barRef={heroBar} />
                <Product />
                <HowItWorks />
                <Proof />
                <div ref={faqRef}>
                    <Faq appUrl={appUrl} onOpenChange={setFaqOpen} />
                </div>
                <FinalAsk appUrl={appUrl} />
            </main>
            <Footer />
            <StickyAsk heroRef={heroBar} faqRef={faqRef} faqOpen={faqOpen} appUrl={appUrl} />
        </>
    );
};

export default Home;
