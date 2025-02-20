import PropTypes from "prop-types";
import plusIcon from "../assets/images/icons/plus.png";
import minusIcon from "../assets/images/icons/minus.png";

const Expandable = ({
    q,
    a,
    isOpen,
    expand,
}) => {
    return (
        <>
            {/* Shrunk: */}
            <div className={`rounded-lg w-full md:w-lrg bg-floWhite flex flex-row justify-between p-1 border-[2px] ${!isOpen ? "" : "hidden"}`}>
                <h5 className="text-base text-floBlack font-yellix-semi flex-start">
                    {q}
                </h5>
                <button className="border-none bg-floWhite" onClick={expand}>
                    <img src={plusIcon} alt="expand" />
                </button>
            </div>

            {/* Expanded: */}
            <div className={`rounded-lg w-full md:w-lrg bg-floWhite flex flex-col p-1 border-[2px] ${isOpen ? "" : "hidden"}`}>
                <div className="expandable_header">
                    <h5 className="text-base text-floBlack font-yellix-semi align-left">
                        {q}
                    </h5>
                    <button className="border-none bg-floWhite" onClick={expand}>
                        <img src={minusIcon} alt="close" />
                    </button>
                </div>
                <p className="text-sm font-yellix text-floAsh align-left">
                    {a}
                </p>
            </div>
        </>
    );
};

Expandable.defaultProps = {
    q: "Question",
    a: "Answer",
    isOpen: false,
};

Expandable.propTypes = {
    q: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    expand: PropTypes.func.isRequired,
};

export default Expandable;