import Hero from '../sections/Hero/Hero';
import Proof from '../sections/Proof/Proof';
import HowItWorks from '../sections/HowItWorks/HowItWorks';
import AskExample from '../sections/AskExample/AskExample';
import StartFree from '../sections/StartFree/StartFree';
import Faq from '../sections/Faq/Faq';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

const Home = () => (
    <>
        <Hero />
        <main id="main">
            <Proof />
            <HowItWorks />
            <AskExample />
            <StartFree />
            <Faq />
            <Contact />
        </main>
        <Footer />
    </>
);

export default Home;
