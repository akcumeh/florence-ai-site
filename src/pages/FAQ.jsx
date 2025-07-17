import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import floLogo from '../assets/images/logo_blue.png';
import Footer from "../components/Footer";
import Expandable from "../components/Expandable";
import ContactModal from "../components/ContactModal";

const FAQMap = [
    {
        id: 1,
        header: "What is Florence Bot and how does it work?",
        body: "Florence Bot is an AI-powered assistant available on Telegram, built to help you excel in your studies. Use our chat to get instant help understanding difficult STEM topics, solve frustrating coding problems, and streamline your research and assignments. Ask a question to see how it works.",
    },
    {
        id: 2,
        header: "How much does Florence Bot cost?",
        body: "Florence Bot uses a \"freemium\" model. You get a certain number of free tokens daily to ask questions or analyze documents. If you need more, you can buy additional tokens at an affordable price (e.g., 10 tokens for 1000 NGN ($ 0.65) ). There are also opportunities to earn free tokens through daily rewards and referrals.",
    },
    {
        id: 3,
        header: "What kind of questions can I ask Florence Bot?",
        body: "You can ask Florence Bot a wide range of academic and informational questions. It can help with things like defining terms, explaining concepts, summarizing articles, and answering general knowledge questions. You can also upload documents (PDF) and images (JPG, PNG) for it to analyze.",
    },
    {
        id: 4,
        header: "How do I get more tokens?",
        body: "Every day that you use Florence Bot, you'll automatically receive a set number of free tokens to help you get your questions answered and explore its features. Think of it as your daily allowance for learning! But that's not all – you can significantly boost your token balance by referring friends.",
    },
    {
        id: 5,
        header: "How do I use Florence Bot on Telegram?",
        body: "You'll be amazed at how easy it is to use Florence Bot! Just add it as a contact on Telegram, just like you would add anyone else. Once you've done that, send the message /start to bring Florence Bot to life. Then, type /help to discover the full range of its abilities or /tokens view your token balance.",
    },
];

const FAQ = () => {
    const [expandedIds, setExpandedIds] = useState(new Set());
    const { isDark, toggleTheme } = useTheme();

    const toggleExpand = (id) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={`min-h-screen transition-colors duration-250 w-full px-5 py-2 flex flex-col items-center justify-between ${isDark ? 'bg-floBlack' : 'bg-floWhite'
            }`}>
            {/* Custom Header for FAQ */}
            <nav className="flex justify-between items-center w-full px-5 py-4">
                <button
                    onClick={toggleTheme}
                    className="group relative min-w-fit"
                    title="Change Theme"
                >
                    <img
                        src={floLogo}
                        alt="Florence*"
                        className="w-4 h-4 transition-transform duration-300 group-hover:animate-spin"
                    />
                </button>

                <Link
                    to="/"
                    className={`ml-6 sm:ml-[4rem] pl-6 font-yellix-semi text-base hover:text-floBlue whitespace-nowrap transition-colors ${isDark ? 'text-floWhite' : 'text-floBlack'
                        }`}
                >
                    Florence AI<span className="text-floBlue">*</span>
                </Link>

                <ContactModal/>
            </nav>

            <div className="bg-floBlue text-floWhite text-[13px] font-yellix-light w-fit px-4 py-1 rounded-full">FAQs</div>
            <h1 className={`text-xl w-full md:w-med font-yellix-semi2 mt-6 ${isDark ? 'text-floWhite' : 'text-floBlack'
                }`}>
                We&apos;re here to answer all your questions<span className="text-floBlue">*</span>
            </h1>
            <div className="w-full lg:w-1/2 space-y-4 mt-6">
                {FAQMap.map((faq) => (
                    <Expandable
                        key={faq.id}
                        q={faq.header}
                        a={faq.body}
                        isOpen={expandedIds.has(faq.id)}
                        expand={() => toggleExpand(faq.id)}
                        isDark={isDark}
                    />
                ))}
            </div>
            <br />
            <br />
            <br />
            <Footer isHomepage={true} />
        </div>
    );
};

export default FAQ;