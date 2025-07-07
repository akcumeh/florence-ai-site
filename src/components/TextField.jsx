import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import aiIcon from "../assets/images/icons/ai_icon.png";
import plusIcon from "../assets/images/icons/plus.png";

const TextField = ({ width, onSubmit, isConversationPage = false }) => {
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputText.trim()) return;

        if (isConversationPage) {
            // If already on conversation page, just send the message via props
            onSubmit(inputText);
            setInputText('');
        } else {
            // If on homepage, navigate to conversation with the input text
            // We'll use this navigate to pass state
            navigate('/conversation', { state: { message: inputText } });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex bg-floWhite flex-row ${width ? `w-${width}` : 'w-full'} px-5 h-7 lg:h-[84px] border-floAsh border-[1px] my-6 md:my-4 border-floAsh border-solid rounded-full justify-between items-center w-full`}>
            <button type="button" className='file-upload'>
                <img src={plusIcon} alt="add" className="w-2 md:w-3 h-2 md:h-3 m-1" />
            </button>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What can I help you with today?"
                className="w-xlrg py-4 h-full border-none focus:outline-none bg-floWhite placeholder-floAsh font-yellix text-sm md:text-base"
            />
            <button type="submit">
                <img src={aiIcon} alt="Submit" className="w-2 md:w-5 h-2 md:h-5 bg-floWhite" />
            </button>
        </form>
    );
};

TextField.defaultProps = {
    width: 'full',
    onSubmit: () => { },
};

TextField.propTypes = {
    width: PropTypes.string,
    onSubmit: PropTypes.func,
    isConversationPage: PropTypes.bool,
};

export default TextField;