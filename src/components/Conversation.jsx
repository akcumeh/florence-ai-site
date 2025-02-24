import { useState, useEffect } from 'react';
import Header from "../components/Header";
import TextField from "../components/TextField";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';
import claudeService from '../services/claudeService';

const Conversation = ({
    numTokens,
    initialMessage,
}) => {
    const [messages, setMessages] = useState([]);
    const [currentResponse, setCurrentResponse] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Add the initial message from the homepage if it exists
        if (initialMessage && initialMessage.trim() !== '') {
            setMessages([
                { type: 'user', content: initialMessage }
            ]);

            // Get response from Claude API
            handleClaudeResponse(initialMessage);
        }
    }, [initialMessage]);

    const handleClaudeResponse = async (userMessage) => {
        setCurrentResponse('');
        setError(null);

        try {
            // Stream response from Claude API
            claudeService.streamMessage(
                userMessage,
                // On each chunk
                (chunk) => {
                    setCurrentResponse(prev => prev + chunk);
                },
                // On complete
                (fullContent) => {
                    setMessages(prev => [...prev, { type: 'assistant', content: fullContent }]);
                    setCurrentResponse('');
                },
                // On error
                (errorMessage) => {
                    setError(`Error: ${errorMessage}`);
                }
            );
        } catch (error) {
            console.error("Error with Claude API:", error);
            setError("Failed to get response from Florence AI. Please try again.");
        }
    };

    const handleNewMessage = (message) => {
        // Add user message
        setMessages(prev => [...prev, { type: 'user', content: message }]);

        handleClaudeResponse(message);
    };

    return (
        <div className="font-yellix text-base flex flex-col h-screen">
            <Header
                isHomePage={false}
                numTokens={numTokens}
            />

            {/* Conversation Area */}
            <div className="flex-grow overflow-y-auto py-4 px-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.type === 'user'
                                    ? 'bg-floBlue text-floWhite'
                                    : 'bg-floWhite border border-floAsh'
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}

                {/* Streaming response */}
                {currentResponse && (
                    <div className="flex justify-start">
                        <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-floWhite border border-floAsh">
                            {currentResponse}
                            <span className="inline-block w-2 h-4 ml-1 bg-floBlue animate-pulse"></span>
                        </div>
                    </div>
                )}

                {/* Error message */}
                {error && (
                    <div className="flex justify-center">
                        <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-failureRed text-floWhite">
                            {error}
                        </div>
                    </div>
                )}
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-floAsh">
                <TextField onSubmit={handleNewMessage} isConversationPage={true} />
            </div>

            <Footer isConversationPage={true} />
        </div>
    );
};

Conversation.propTypes = {
    numTokens: PropTypes.number.isRequired,
    initialMessage: PropTypes.string,
};

Conversation.defaultProps = {
    initialMessage: '',
};

export default Conversation;