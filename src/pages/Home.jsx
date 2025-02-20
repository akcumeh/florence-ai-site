import Header from "../components/Header";
import Homepage from "./Homepage";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="font-yellix text-base">
            <Header
                isHomepage={true}
                numTokens={10}
            />
            <Homepage />
            <Footer
                isHomepage={true}
            />
        </div>
    );
};

export default Home;