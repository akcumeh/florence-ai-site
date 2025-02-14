import PropTypes from "prop-types";

const Footer = ({
    isHomepage,
    isConversationPage,
}) => {
    return (
        <>
            <div className={`${isHomepage ? "hidden" : ""} text-base text-floAsh flex flex-row justify-center items-center `}>
                Get the most out of Florence<span className="text-floBlue">*</span> - try our <a href="https://wa.me/12164935624/" className="text-waGreen ">WhatsApp</a> and <a href="https://t.me/FlorenceAIBot" className="text-tgBlue ">Telegram</a> bots for enhanced capabilities.

            </div>

            {/* if footer is convo page */}
            <div className={`${isConversationPage}`}>
                Florence<span className="text-floBlue">*</span> strives for accuracy, but verify all provided information independently.
            </div>
        </>
    );
};

Footer.propTypes = {
    isHomepage: PropTypes.bool,
    isConversationPage: PropTypes.bool,
};

export default Footer;