import { useState } from 'react';
import waIcon from "../assets/images/icons/wa.png";
import tgIcon from "../assets/images/icons/tg.png";

const Bots = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
    };

    return (
        <div className="my-2 md:mx-6 flex flex-col items-center justify-center text-base font-yellix-semi">
            <div className={`text-sm font-yellix-italight transition-colors duration-1000 ${showMessage ? 'text-floAsh' : 'text-floWhite'}`}>
                Coming soon<span className={showMessage ? 'text-floBlue' : 'text-floWhite'}>*</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <button
                    onClick={handleWhatsAppClick}
                    className="flex flex-row justify-center gap-2 items-center px-3 no-underline wa border-floAsh border-[1px] hover:border-waGreen w-lrg rounded-full text-base p-1 md:px-3 md:py-2 m-1"
                >
                    <img src={waIcon} alt="WA" className="w-3 h-3" />
                    <span className="text-[10px] sm:text-sm">
                        Check Out Our <span className="text-waGreen">WhatsApp</span> Bot
                    </span>
                </button>

                <a href="https://t.me/FlorenceAIBot" className="flex flex-row justify-center gap-2 items-center px-3 no-underline tg border-floAsh border-[1px] hover:border-tgBlue w-lrg rounded-full text-base p-1 md:px-3 md:py-2 m-1">
                    <img src={tgIcon} alt="TG" className="w-3 h-3" />
                    <span className="text-[10px] sm:text-sm">
                        Check Out Our <span className="text-tgBlue">Telegram</span> Bot
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Bots;