import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import aiIcon from "../assets/images/icons/ai_icon.png";

const FAQLink = () => {
    const { isDark } = useTheme();

    return (
        <Link to="/faq" className="no-underline">
            <div className={`flex items-center justify-center rounded-full text-[13px] mx-auto my-4 shadow-sm border-[1px] px-4 py-[9px] hover:border-floBlue w-fit transition-colors ${isDark
                    ? 'bg-floBlack text-floWhite border-floWhite'
                    : 'bg-floWhite text-floBlack border-floAsh'
                }`}>
                <img src={aiIcon} alt="AI" className="w-3 mr-1" />
                <span className="whitespace-nowrap">
                    <span className="text-floBlue">FAQ: </span>
                    <span>You&apos;ve got </span>
                    <span className="text-floBlue">questions</span>
                    <span>, we&apos;ve got </span>
                    <span className="text-floBlue">answers!</span>
                </span>
            </div>
        </Link>
    );
};

export default FAQLink;