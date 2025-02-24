import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Expandable from "../components/Expandable";

const FAQMap = [
    {
        id: 1,
        header: "What is Florence Bot and how does it work?",
        body: "Florence Bot is an AI-powered assistant available on WhatsApp and Telegram. It can answer your questions, summarize documents and images, and help you learn. You interact with it by sending simple commands and questions through the chat, just like you would with a friend.",
    },
    {
        id: 2,
        header: "How much does Florence Bot cost?",
        body: "Florence Bot uses a \"freemium\" model. You get a certain number of free tokens daily to ask questions or analyze documents. If you need more, you can buy additional tokens at an affordable price (e.g., 10 tokens for 1000 NGN). There are also opportunities to earn free tokens through daily rewards and referrals.",
    },
    {
        id: 3,
        header: "What kind of questions can I ask Florence Bot?",
        body: "You can ask Florence Bot a wide range of academic and informational questions. It can help with things like defining terms, explaining concepts, summarizing articles, and answering general knowledge questions. You can also upload documents (PDF, DOC) and images (JPG, PNG) for it to analyze.",
    },
    {
        id: 4,
        header: "How do I get more tokens?",
        body: "Every day that you use Florence Bot, you'll automatically receive a set number of free tokens to help you get your questions answered and explore its features. Think of it as your daily allowance for learning! But that's not all - you can significantly boost your token balance by referring friends.",
    },
    {
        id: 5,
        header: "How do I use Florence Bot on WhatsApp or Telegram?",
        body: "You'll be amazed at how easy it is to use Florence Bot! Just add it as a contact on WhatsApp or Telegram, just like you would add anyone else. Once you've done that, send the message /start to bring Florence Bot to life. Then, type /help to discover the full range of its abilities.",
    },
];

const FAQ = () => {
    // Track expanded state for each FAQ item separately
    const [expandedIds, setExpandedIds] = useState(new Set());

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
        <div className="w-full flex flex-col items-center justify-between my-1">
            <Header
                isHomePage={false}
                numTokens={10}
            />
            <div className="bg-floBlue text-floWhite text-sm font-yellix-light px-4 py-1 rounded-full">FAQs</div>
            <h1 className="text-xl w-full md:w-med font-yellix-semi2 mt-6">
                We&apos;re here to answer all your questions<span className="text-floBlue">*</span>
            </h1>
            <div className="w-full lg:w-med space-y-4 mt-6">
                {FAQMap.map((faq) => (
                    <Expandable
                        key={faq.id}
                        q={faq.header}
                        a={faq.body}
                        isOpen={expandedIds.has(faq.id)}
                        expand={() => toggleExpand(faq.id)}
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