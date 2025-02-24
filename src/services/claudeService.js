// src/services/claudeService.js

/**
 * Service for interacting with the Claude API
 */
class ClaudeService {
    constructor() {
        this.apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
        this.apiUrl = import.meta.env.VITE_CLAUDE_API_URL;

        if (!this.apiKey) {
            console.error('Claude API key is missing. Please check your environment variables.');
        }
    }

    /**
     * Send a message to Claude API with streaming response
     * @param {string} userMessage - The user's message
     * @param {function} onChunk - Callback function for each chunk of the response
     * @param {function} onComplete - Callback function when streaming is complete
     * @param {function} onError - Callback function for errors
     */
    async streamMessage(userMessage, onChunk, onComplete, onError) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: "claude-3-opus-20240229",
                    max_tokens: 1024,
                    messages: [
                        { role: "user", content: userMessage }
                    ],
                    stream: true
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
            }

            if (!response.body) {
                throw new Error("ReadableStream not supported in this browser.");
            }

            // Process the streaming response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            let fullContent = "";

            while (true) {
                const { done, value } = await reader.read();

                if (done) {
                    break;
                }

                // Decode the stream chunk
                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;

                // Process each line in the buffer
                let lines = buffer.split("\n");
                buffer = lines.pop() || ""; // Keep the last incomplete line in the buffer

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        const data = line.slice(6);

                        // Skip [DONE] message
                        if (data === "[DONE]") continue;

                        try {
                            const parsed = JSON.parse(data);

                            if (parsed.type === "content_block_delta" &&
                                parsed.delta?.type === "text_delta") {
                                const textChunk = parsed.delta.text;
                                fullContent += textChunk;
                                onChunk(textChunk);
                            }
                        } catch (e) {
                            console.warn("Error parsing SSE data:", e);
                        }
                    }
                }
            }

            onComplete(fullContent);
        } catch (error) {
            console.error("Error streaming from Claude API:", error);
            onError(error.message);
        }
    }

    /**
     * Send a standard (non-streaming) message to Claude API
     * @param {string} userMessage - The user's message
     * @returns {Promise<object>} - Claude's response
     */
    async sendMessage(userMessage) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: "claude-3-opus-20240229",
                    max_tokens: 1024,
                    messages: [
                        { role: "user", content: userMessage }
                    ]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error calling Claude API:", error);
            throw error;
        }
    }
}

export default new ClaudeService();