import { useTheme } from '../contexts/ThemeContext';
import floLogo from '../assets/images/logo_blue.png';
import floGradient from '../assets/images/flo_gradient.png';
import FAQLink from '../components/FAQLink';
import Bots from '../components/Bots';
import ContactModal from '../components/ContactModal';

const Landing = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-250 ${isDark ? 'bg-floBlack' : 'bg-floWhite'
            }`}>
            {/* Header */}
            <nav className="flex justify-between items-center px-5 py-5">
                <button
                    onClick={toggleTheme}
                    className="group relative ml-2"
                    title="Change Theme"
                >
                    <img
                        src={floLogo}
                        alt="Florence*"
                        className="w-4 h-4 transition-transform duration-300 group-hover:animate-spin"
                    />
                </button>

                <ContactModal />
            </nav>

            <div className="w-full">
                <FAQLink />
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center min-h-[60vh] px-5">
                {/* Main Heading */}
                <div className="text-center mb-4">
                    <h1 className={`text-xl md:text-2xl font-yellix-semi2 mb-2 ${isDark ? 'text-floWhite' : 'text-floBlack'
                        }`}>
                        Welcome to Florence<span className="text-floBlue">*</span> AI
                    </h1>

                    <h3 className={`text-lg md:text-2xl font-yellix-semi ${isDark ? '' : 'text-floAsh'
                        }`}
                        style={isDark ? {
                            backgroundImage: `url(${floGradient})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        } : {}}>
                        Your intelligent academic companion
                    </h3>
                    <br />
                    <Bots />
                </div>

            </div>
        </div>
    );
};

export default Landing;