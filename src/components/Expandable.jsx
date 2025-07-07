import PropTypes from "prop-types";
import plusIcon from "../assets/images/icons/plus.png";
import minusIcon from "../assets/images/icons/minus.png";

const Expandable = ({
    q,
    a,
    isOpen,
    expand,
}) => {
    const formatText = (text) => {
        return text.replace(
            /\/(start|help)/g,
            (match) => `<span class="text-floBlue">${match}</span>`
        );
    };

    return (
        <div className={`w-full rounded-[36px] border border-floAsh border-[2px] border-opacity-50 transition-all duration-250 ${isOpen ? 'bg-floWhite' : 'bg-transparent'}`}>
            <div
                className="flex items-center text-left justify-between px-4 py-2 cursor-pointer"
                onClick={expand}
            >
                <h5 className="text-base text-floBlack font-yellix">
                    {q}
                </h5>
                <button className="border-none bg-transparent p-2">
                    <img
                        src={isOpen ? minusIcon : plusIcon}
                        alt={isOpen ? "collapse" : "expand"}
                        className="w-3 h-3"
                    />
                </button>
            </div>

            {isOpen && (
                <div className="px-4 pb-3 text-left">
                    <p
                        className="text-sm font-yellix text-floAsh"
                        dangerouslySetInnerHTML={{ __html: formatText(a) }}
                    />
                </div>
            )}
        </div>
    );
};

Expandable.propTypes = {
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    expand: PropTypes.func.isRequired,
};

export default Expandable;