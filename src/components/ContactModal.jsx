import { useState } from "react";

import founderImg1 from "../assets/images/photos/founder_1.jpeg";
import founderImg2 from "../assets/images/photos/founder_2.jpg";

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleOverlayClick = (e) => {
        if (e.target.classList === e.currentTarget) {
            setIsOpen(false);
        };
    };

    return (
        <>
            <button onClick={toggleModal} className="border-none px-4 py-3 hover:text-floBlue hover:bg-floAsh hover:bg-opacity-25 rounded-full">
                Contact Us
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-floAsh bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
                    <div className="bg-floWhite py-3 px-4 rounded-3xl w-[72.5%] max-w-xlrg md:max-w-med h-auto min-h-med lg:min-h-[50%] flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-yellix-semi text-left">
                                Reach Out & Say <span className="text-floBlue">Hello!</span>
                            </h2>
                            <p className="text-[10px] md:text-sm mb-2 md:mb-0 font-yellix-italight text-left">
                                We&apos;re always up for a good chat! If you have questions, comments, or just want to connect, reach out. We&apos;d love to hear from you.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="founder_1 flex flex-row items-start gap-3">
                                <img src={founderImg1} alt="Ope" className="w-6 h-6 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap">
                                        <span className="text-md font-yellix-semi text-floBlack whitespace-nowrap">
                                            Opeyemi Muyiwa-Dada -
                                        </span>
                                        <span className="text-floAsh font-yellix-italight text-[13px]"> I founded & designed everything</span>
                                    </div>
                                    <ul className="flex flex-row gap-1">
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="tel:+2348143770724">Call</a></li>
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="http://wa.me/2348143770724">Text</a></li>
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="mailto:opeyemi.muyiwa.dada2002@gmail.com">Mail</a></li>
                                        <li><a href="https://x.com/Ope_Ugo" className="text-floBlue text-sm hover:text-floAsh">X/Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="founder_2 flex flex-row items-start gap-3">
                                <img src={founderImg2} alt="Angel" className="w-6 h-6 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-wrap items-center">
                                        <span className="text-md font-yellix-semi text-floBlack whitespace-nowrap leading-none">
                                            Angel Umeh -
                                        </span>
                                        <span className="text-floAsh font-yellix-italight text-[13px] leading-none"> I brought the designs to life</span>
                                    </div>
                                    <ul className="flex flex-row gap-1">
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="tel:+2348164975875">Call</a></li>
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="http://t.me/yarnandmk">Text</a></li>
                                        <li><a className="text-floBlue text-sm hover:text-floAsh" href="mailto:akcumeh@gmail.com">Mail</a></li>
                                        <li><a href="https://x.com/akcumeh" className="text-floBlue text-sm hover:text-floAsh">X/Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end">
                            <button className="text-floWhite bg-floBlue rounded-full p-1 w-med text-base font-yellix-semi hover:bg-floAsh hover:text-floWhite" onClick={toggleModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactModal;