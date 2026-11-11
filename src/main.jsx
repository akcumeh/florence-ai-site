import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/600.css';
import './styles/main.scss';
import { ThemeProvider } from './theme/ThemeProvider';
import App from './App.jsx';

const container = document.getElementById('root');

const app = (
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

if (container.hasChildNodes() && window.location.pathname === '/') {
    ReactDOM.hydrateRoot(container, app);
} else {
    container.textContent = '';
    ReactDOM.createRoot(container).render(app);
}
