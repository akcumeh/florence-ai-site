// server.js
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// CORS setup
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5632',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from the React app
app.use(express.static('dist'));

// Proxy API requests to Claude
app.use('/api/claude', createProxyMiddleware({
    target: 'https://api.anthropic.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api/claude': '/v1/messages'
    },
    onProxyReq: (proxyReq) => {
        // Add the API key from environment variables
        proxyReq.setHeader('x-api-key', process.env.CLAUDE_API_KEY);
        proxyReq.setHeader('anthropic-version', '2023-06-01');
    }
}));

// Handle any remaining requests with the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});