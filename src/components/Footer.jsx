import PropTypes from "prop-types";

const Footer = ({
    isHomepage,
    isConversationPage,
}) => {
    return (
        <>
            <footer className={`${!isHomepage ? "hidden" : ""} text-sm my-2 text-floAsh`}>
                Get the most out of Florence<span className="text-floBlue">*</span> - try our <a href="https://wa.me/12164935624/" className="text-waGreen ">WhatsApp</a> and <a href="https://t.me/FlorenceAIBot" className="text-tgBlue ">Telegram</a> bots for enhanced capabilities.

            </footer>

            {/* if footer is convo page */}
            <footer className={`${isConversationPage ? "" : "hidden"} text-sm my-2 text-floAsh`}>
                Florence<span className="text-floBlue">*</span> strives for accuracy, but verify all provided information independently.
            </footer>
        </>
    );
};

Footer.propTypes = {
    isHomepage: PropTypes.bool,
    isConversationPage: PropTypes.bool,
};

export default Footer;