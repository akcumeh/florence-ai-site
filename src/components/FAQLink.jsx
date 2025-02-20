import { Link } from 'react-router-dom';
import aiIcon from "../assets/images/icons/ai_icon.png";

const FAQLink = () => {
    return (
        <Link to="/faq" className="no-underline">
            <div className="flex items-center justify-center bg-floWhite rounded-full text-sm my-4 shadow-sm border-floAsh border-[1px] px-4 py-1 hover:border-floBlue">
                <img src={aiIcon} alt="AI" className="w-3 mr-1" />
                <span>
                    <span className="text-floBlue">FAQ: </span>
                    <span className="text-floBlack">You&apos;ve got </span>
                    <span className="text-floBlue">questions</span>
                    <span className="text-floBlack">, we&apos;ve got </span>
                    <span className="text-floBlue">answers!</span>
                </span>
            </div>
        </Link>
    );
};

export default FAQLink;