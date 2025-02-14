const Bots = () => {
    return (
        <div className="m-6 flex flex-row">
            <button className="wa border-floAsh b-[1px] font-base p-2 m-1">
                <a href="./bots">
                    <img src="../assets/icons/wa.png" alt="WA" className="w-3" />
                    Check Out Our <span className="text-waGreen">WhatsApp</span> Bot
                </a>
            </button>
            <button className="tg border-floAsh b-[1px] font-base p-2 m-1">
                <a href="./bots">
                    <img src="../assets/icons/tg.png" alt="TG" className="w-3" />
                    Check Out Our <span className="text-tgBlue">Telegram</span> Bot
                </a>
            </button>
        </div>
    );
};

export default Bots;