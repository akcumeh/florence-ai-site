import Header from "../components/Header";
import TextField from "../components/TextField";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';

const Conversation = ({
    numTokens,
}) => {
    return (
        <div className="font-yellix text-base">
            <Header
                numTokens={numTokens}
            />

            {/* Q & A */}

            <TextField />

            <Footer />
        </div>
    )
};

Conversation.propTypes = {
    numTokens: PropTypes.number.isRequired,
};

export default Conversation;