import Header from "../components/Header";
import Homepage from "./Homepage";
import Footer from "../components/Footer";
import Conversation from "../components/Conversation";

const Home = () => {
    const numTokens = 10;
    return (
        <div className="font-yellix text-base">
            <div className="isHome">
                <Header
                    isHomePage={true}
                    isConversationPage={false}
                    numTokens={numTokens}
                />
                <Homepage />
                <Footer
                    isHomepage={true}
                    isConversationPage={false}
                />
            </div>
            <div className="isConvo">
                <Header
                    isHomePage={false}
                    isConversationPage={true}
                    numTokens={numTokens}
                />
                <Conversation/>
                <Footer
                    isHomepage={false}
                    isConversationPage={true}
                />
            </div>
        </div>
    );
};

export default Home;