import PropTypes from "prop-types";

const Expandable = ({
    q,
    a,
    isOpen,
    expand,
    isDark = false
}) => {
    const formatText = (text) => {
        return text.replace(
            /\/(start|help)/g,
            (match) => `<span class="text-floBlue">${match}</span>`
        );
    };

    return (
        <div className={`w-[90%] md:w-full mx-auto rounded-[36px] border border-[2px] border-opacity-50 transition-all duration-250 ease-in-out ${isOpen
                ? (isDark ? 'bg-floBlack border-floWhite' : 'bg-floWhite border-floAsh')
                : (isDark ? 'bg-transparent border-floWhite' : 'bg-transparent border-floAsh')
            }`}>
            <div
                className="flex items-center text-left justify-between px-4 py-3 cursor-pointer"
                onClick={expand}
            >
                <h5 className={`text-base font-yellix flex-1 pr-4 transition-colors duration-250 ${isDark ? 'text-floWhite' : 'text-floBlack'
                    }`}>
                    {q}
                </h5>
                <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 text-lg transition-transform duration-375 ease-in-out ${isDark ? "text-floWhite" : "text-floBlack"}`}>
                    {isOpen ? "-" : "+"}
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-250 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pb-3 text-left">
                    <p
                        className="text-sm font-yellix text-floAsh"
                        dangerouslySetInnerHTML={{ __html: formatText(a) }}
                    />
                </div>
            </div>
        </div>
    );
};

Expandable.propTypes = {
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    expand: PropTypes.func.isRequired,
    isDark: PropTypes.bool,
};

export default Expandable;