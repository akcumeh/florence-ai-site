import { Link } from 'react-router-dom';
import floLogo from '../assets/images/logo_blue.png';
import Header from '../components/Header';

const Landing = () => {
    return (
        <div className="relative min-h-screen bg-floWhite font-yellix flex items-center justify-start md:px-4">
            {/* Desktop background image */}
            <div
                className="hidden md:block absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/src/assets/images/landing.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Mobile background - large blurred logo top right */}
            <div className="md:hidden absolute top-0 right-0 w-64 h-64 opacity-20">
                <img
                    src={floLogo}
                    alt="Florence Logo"
                    className="w-full h-full object-contain blur-2xl"
                />
            </div>

            {/* Logo at top left */}
            <Link to="/home" className="absolute top-2 z-20">
                {/* <img src={floLogo} alt="Florence*" className="w-4 h-4 md:w-5 md:h-5" /> */}
                <Header
                isLanding={true} />
            </Link>

            {/* Larger blur circle at bottom left */}
            <div className="absolute bottom-6 left-6 w-32 h-32 md:w-48 md:h-48 bg-floBlue rounded-full blur-3xl opacity-40" />

            {/* Content */}
            <div className="z-10 w-lrg mx-[5rem] mt-6 pt-6 md:pt-2 md:mt-2">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-yellix-semi2 tracking-tight text-floBlack leading-tight mb-4">
                    Florence<span className="text-floBlue text-bold">*</span>
                </h1>
                <h2 className="text-lg md:text-xl font-yellix-semi mb-4 mt-0">
                    Your Trusted AI Study Buddy for All Your Learning Needs
                </h2>
                <p className="text-base md:text-md text-floBlack font-yellix mb-5 leading-relaxed">
                    Get personalized help with research, assignments, and study plans—anytime you need it
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-3">
                    {/* <button className="bg-floBlack text-floWhite w-full md:w-content whitespace-nowrap h-auto px-5 py-3 rounded-full font-yellix-semi text-sm hover:bg-waGreen hover:text-floWhite transition-colors group">
                        Check Out Our <span className="text-waGreen group-hover:text-floWhite">WhatsApp</span> Bot
                    </button> */}
                    <a
                        href="https://t.me/FlorenceAIBot"
                        className="bg-floBlack text-floWhite mx-auto my-3 md:w-content whitespace-nowrap h-auto px-5 py-3 rounded-full font-yellix-semi text-sm hover:bg-tgBlue hover:text-floWhite transition-colors no-underline text-center group"
                    >
                        Check Out Our <span className="text-tgBlue group-hover:text-floWhite">Telegram</span> Bot
                    </a>
                    {/* <Link
                        to="/home"
                        className="bg-floBlack text-floWhite w-full md:w-content whitespace-nowrap h-auto px-5 py-3 rounded-full font-yellix-semi text-sm hover:bg-floAsh hover:text-floWhite transition-colors no-underline text-center"
                    >
                        Try It Out Here
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Landing;