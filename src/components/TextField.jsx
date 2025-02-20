import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import aiIcon from "../assets/images/icons/ai_icon.png";
import plusIcon from "../assets/images/icons/plus.png";

const TextField = ({ width }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/conversation');
    };

    return (
        <form onSubmit={handleSubmit} className={`flex bg-floWhite flex-row ${width ? `w-${width}` : 'w-full'} px-5 h-7 lg:h-[84px] border-floAsh border-[1px] my-6 md:my-4 border-floAsh border-solid rounded-full justify-between items-center w-full`}>
            <button type="button" className='file-upload'>
                <img src={plusIcon} alt="add" className="w-2 md:w-3 h-2 md:h-3 m-1" />
            </button>
            <input
                type="text"
                placeholder="What can I help you with today?"
                className="w-xlrg py-4 h-full border-none focus:outline-none bg-floWhite placeholder-floAsh font-yellix text-sm md:text-base"
            />
            <button type="submit">
                <img src={aiIcon} alt="" className="w-2 md:w-5 h-2 md:h-5 bg-floWhite" />
            </button>
        </form>
    );
};

TextField.defaultProps = {
    width: 'full',
};

TextField.propTypes = {
    width: PropTypes.string,
};

export default TextField;