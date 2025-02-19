import waIcon from "../assets/images/icons/wa.png";
import tgIcon from "../assets/images/icons/tg.png";

const Bots = () => {
    return (
        <div className="mx-3 my-2 md:mx-6 w-auto flex flex-row justify-center text-base font-yellix-semi">
            <a href="https://wa.me/12164935624/" className=" flex flex-row justify-between gap-2 items-center px-1 no-underline wa border-floAsh border-[1px] hover:border-waGreen w-med rounded-full items-center text-base p-1 md:px-3 md:py-2 m-1 items-center">
                <img src={waIcon} alt="WA" className="w-3 h-3" />
                <span className="text-sm">
                    Check Out Our <span className="text-waGreen">WhatsApp</span> Bot
                </span>
            </a>
            <a href="https://t.me/FlorenceAIBot" className="flex flex-row justify-between gap-2 items-center px-1 no-underline tg border-floAsh border-[1px] hover:border-tgBlue w-med rounded-full items-center text-base p-1 md:px-3 md:py-2 m-1 items-center">
                <img src={tgIcon} alt="TG" className="w-3 h-3" />
                <span className="text-sm">
                    Check Out Our <span className="text-tgBlue">Telegram</span> Bot
                </span>
            </a>
        </div>
    );
};

export default Bots;