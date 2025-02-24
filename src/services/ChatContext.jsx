// src/context/ChatContext.jsx
import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import claudeService from './claudeService';

// Create the context
const ChatContext = createContext();

// Custom hook for using the chat context
export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};

// Provider component
export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentResponse, setCurrentResponse] = useState('');
    const [error, setError] = useState(null);
    const [tokens, setTokens] = useState(10); // Your token logic

    // Send a message to Claude
    const sendMessage = useCallback(async (messageContent) => {
        if (!messageContent.trim()) return;

        // Add user message to state
        const userMessage = { role: 'user', content: messageContent };
        setMessages(prev => [...prev, userMessage]);

        // Start loading state
        setIsLoading(true);
        setCurrentResponse('');
        setError(null);

        try {
            // Create conversation history for context
            const conversationHistory = messages.slice(-10); // Last 10 messages for context
            conversationHistory.push(userMessage);

            // Stream the response
            claudeService.streamMessage(
                messageContent,
                // Handle each chunk
                (chunk) => {
                    setCurrentResponse(prev => prev + chunk);
                },
                // Handle complete response
                (fullContent) => {
                    const assistantMessage = { role: 'assistant', content: fullContent };
                    setMessages(prev => [...prev, assistantMessage]);
                    setCurrentResponse('');
                    setIsLoading(false);

                    // Deduct a token for the interaction
                    setTokens(prev => Math.max(0, prev - 1));
                },
                // Handle errors
                (errorMessage) => {
                    setError(`Error: ${errorMessage}`);
                    setIsLoading(false);
                }
            );
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to communicate with Florence AI. Please try again later.');
            setIsLoading(false);
        }
    }, [messages]);

    // Clear conversation history
    const clearConversation = useCallback(() => {
        setMessages([]);
        setCurrentResponse('');
        setError(null);
    }, []);

    // Add tokens (for your token system)
    const addTokens = useCallback((amount) => {
        setTokens(prev => prev + amount);
    }, []);

    // The context value
    const value = {
        messages,
        isLoading,
        currentResponse,
        error,
        tokens,
        sendMessage,
        clearConversation,
        addTokens
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

ChatProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ChatContext;