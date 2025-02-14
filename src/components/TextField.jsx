import PropTypes from 'prop-types';

const TextField = ({
    width,
}) => {
    return (
        <div className={`flex ${width ? `w-${width}` : 'w-full'} h-[1/10]`}>
            <img src="../assets/icons/plus.png" alt="add" className="w-2 h-2" />
            <input type="text" placeholder="What can I help you with today?" className="border-none w-[3/4] h-6 p-1" />
            <img src="../assets/ai_icon.png" alt="AI" className="w-5 h-5 background-floWhite " />
        </div>
    );
};

TextField.defaultProps = {
    width: 'full',
};

TextField.propTypes = {
    width: PropTypes.string,
}

export default TextField;