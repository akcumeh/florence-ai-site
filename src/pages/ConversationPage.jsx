import { useLocation } from 'react-router-dom';
import ConversationComponent from "../components/Conversation";

const ConversationPage = () => {
    const location = useLocation();
    const initialMessage = location.state?.message || '';

    return (
        <ConversationComponent
            numTokens={10}
            initialMessage={initialMessage}
        />
    );
};

export default ConversationPage;