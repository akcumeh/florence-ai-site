import { useState } from 'react';
import Header from "./Header";
import Homepage from "./Homepage";
import Conversation from "./Conversation";
import Footer from "./Footer";

const Home = () => {
    const [currentPage, setCurrentPage] = useState('homepage');
    const [numTokens, setNumTokens] = useState(10);

    // const setCurrentPage = () => {
    //         currentPage = 'conversation';
    //         return currentPage;
    //     };
    // };

    // const setNumTokens = (newNumTokens) => {
    //         numTokens = newNumTokens;
    //         return numTokens;
    //     };
    // };

    return (
        <div className="font-yellix text-base">
            <Header
                isHomepage={currentPage === 'homepage'}
                numTokens={numTokens}
            />

            {currentPage === 'homepage' ? (
                <Homepage
                    onAsk={setCurrentPage}
                    setNumTokens={setNumTokens}
                />
            ) : (
                <Conversation />
            )}

            <Footer
                isHomepage={currentPage === 'homepage'}
            />
        </div>
    );
};

export default Home;