import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ChatProvider } from './services/ChatContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChatProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChatProvider>
    </React.StrictMode>,
);